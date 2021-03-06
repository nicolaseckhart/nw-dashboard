import * as React from 'react';
import io from 'socket.io-client';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SensorData from './models/SensorData';
import WebcamData from './models/WebcamData';
import MiningData from './models/MiningData';
import WSUpdateData from './models/WSUpdateData';
import {
  apiRequestOptions,
  JsonMiningDump,
  JsonSensorDumpPi,
  JsonSensorDumpRig,
  JsonWebcamDump,
  JsonWSUpdateDump,
} from './shared';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { SensorHistory } from './components/SensorHistory/SensorHistory';
import { WebcamOverview } from './components/WebcamOverview/WebcamOverview';
import { NotFound } from './components/NotFound/NotFound';
import { MiningOverview } from './components/MiningOverview/MiningOverview';
import { EventHistory } from './components/EventHistory/EventHistory';
import WeatherSummary from './components/WeatherSummary/WeatherSummary';
import { PlantComponent } from './components/PlantComponent/PlantComponent';
import VentData from './models/VentData';
import { CommandComponent } from './components/CommandComponent/CommandComponent';
import ThemeManager from './models/ThemeManager';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavItem } from './components/UiComponents/NavItem';

interface State {
  sensorData: SensorData;
  webcamData: WebcamData;
  ventData: VentData;
  miningData: MiningData | null;
  serviceStates: WSUpdateData;
  isServiceListOpen: boolean;
  allServicesOnline: boolean;
}

export class App extends React.Component<{}, State> {
  socket: SocketIOClient.Socket;
  themeManager: ThemeManager;

  constructor(props: {}) {
    super(props);
    this.state = {
      sensorData: new SensorData(),
      webcamData: new WebcamData(),
      ventData: new VentData(),
      miningData: null,
      isServiceListOpen: false,
      serviceStates: new WSUpdateData(),
      allServicesOnline: false,
    };
    this.socket = this.createSocket();
    this.themeManager = new ThemeManager();
  }

  async componentDidMount() {
    this.themeManager.mountTheme();
    this.connectToSocket();
    const initialWebcamData = await this.fetchWebcamData();
    this.setState({ webcamData: this.state.webcamData.update({ cam0: initialWebcamData.cam0 }) });
    this.setState({ webcamData: this.state.webcamData.update({ cam1: initialWebcamData.cam1 }) });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  fetchWebcamData = async () => {
    const res0 = await fetch(`${process.env.REACT_APP_API_HOST}/cam/0/day`, apiRequestOptions);
    const cam0 = await res0.json();

    const res1 = await fetch(`${process.env.REACT_APP_API_HOST}/cam/1/day`, apiRequestOptions);
    const cam1 = await res1.json();

    return { cam0: cam0[0].data, cam1: cam1[0].data };
  };

  createSocket = (): SocketIOClient.Socket => io(process.env.REACT_APP_WS_HOST as string);

  connectToSocket = (): void => {
    this.socket.on('connect', () => {
      this.socket.emit('authentication', {
        username: process.env.REACT_APP_SOCKET_USER,
        password: process.env.REACT_APP_SOCKET_PASSWORD,
      });

      this.socket.on('authenticated', () => {
        this.socket.emit('get-user-list');

        this.socket.on('nwmon_pi', (data: JsonSensorDumpPi) => {
          this.setState({ sensorData: this.state.sensorData.update(data, 'pi') });
        });

        this.socket.on('nwmon_rig', (data: JsonSensorDumpRig) => {
          this.setState({
            sensorData: this.state.sensorData.update(data, 'rig'),
            ventData: this.state.ventData.update(data.air.vents),
          });
        });

        this.socket.on('nwcam', (data: JsonWebcamDump) => {
          this.setState({ webcamData: this.state.webcamData.update(data) });
        });

        this.socket.on('mining-stats', (data: JsonMiningDump) => {
          this.setState({ miningData: new MiningData(data) });
        });

        this.socket.on('ws-update', (data: JsonWSUpdateDump) => {
          const wsUpdate = new WSUpdateData(data);
          this.setState({
            serviceStates: wsUpdate,
            allServicesOnline:
              wsUpdate.update.clients.includes('nwmon_pi') &&
              wsUpdate.update.clients.includes('nwmon_rig') &&
              wsUpdate.update.clients.includes('nwcam') &&
              wsUpdate.update.clients.includes('rig1'),
          });
        });
      });
    });
  };

  executeCommand = (command: string) => {
    this.socket.emit(
      'nwmon-com',
      JSON.stringify({
        type: command,
        description: 'Manually triggered command by web user',
      }),
    );
    toast.success('Command executed!', { position: 'bottom-center' });
  };

  handleServiceListOpen = () => this.setState({ isServiceListOpen: true });
  handleServiceListClose = () => this.setState({ isServiceListOpen: false });

  render = () => (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Link to="/">
            <Navbar.Brand>
              NW Dashboard
              <span className="jam jam-leaf ml-2 mr-3" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navigation" />
          <Navbar.Collapse id="navigation">
            <Nav className="mr-auto">
              <NavItem linkTo="/plants" text="Plants" icon="branch" />
              <NavItem linkTo="/history/bloom_tent/day" text="History" icon="history" />
              <NavItem linkTo="/webcams" text="Webcams" icon="camera-alt" />
              <NavItem linkTo="/mining" text="Mining" icon="coin" />
              <NavItem linkTo="/commands" text="Commands" icon="dashboard" />
            </Nav>

            <Link to="/events">
              <Nav.Item className="mr-2">
                <span className="jam jam-task-list ml-2" />
              </Nav.Item>
            </Link>

            <NavDropdown
              alignRight
              title={
                this.socket.connected ? (
                  <span className={this.state.allServicesOnline ? 'service-online' : 'service-problem'}></span>
                ) : (
                  <span className={'service-offline'}></span>
                )
              }
              id="status-nav-dropdown"
              onMouseEnter={this.handleServiceListOpen}
              onMouseLeave={this.handleServiceListClose}
              show={this.state.isServiceListOpen}
            >
              <NavDropdown.Header>Services</NavDropdown.Header>
              <NavDropdown.Item
                className={
                  this.state.serviceStates.update.clients.includes('nwmon_pi') ? 'service-online' : 'service-offline'
                }
              >
                nwmon (pi)
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  this.state.serviceStates.update.clients.includes('nwmon_rig') ? 'service-online' : 'service-offline'
                }
              >
                nwmon (rig)
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  this.state.serviceStates.update.clients.includes('nwcam') ? 'service-online' : 'service-offline'
                }
              >
                nwcam
              </NavDropdown.Item>
              <NavDropdown.Item
                className={
                  this.state.serviceStates.update.clients.includes('rig1') ? 'service-online' : 'service-offline'
                }
              >
                mining (rig1)
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="mr-2">
              <button className="jam jam-brightness theme-button" onClick={this.themeManager.toggleTheme} />
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Switch>
            <Route exact path="/">
              <Dashboard sensorData={this.state.sensorData} />
              <WeatherSummary />
            </Route>
            <Route exact path="/plants">
              <PlantComponent ventData={this.state.ventData} sensorData={this.state.sensorData} />
            </Route>
            <Route exact path="/mining">
              <MiningOverview miningData={this.state.miningData} />
            </Route>
            <Route exact path="/history/:sensor/:scope" component={SensorHistory} />
            <Route exact path="/webcams">
              <WebcamOverview webcamData={this.state.webcamData} />
            </Route>
            <Route exact path="/commands">
              <CommandComponent commandFn={this.executeCommand} />
            </Route>
            <Route exact path="/events">
              <EventHistory />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
