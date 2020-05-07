import * as React from 'react';
import io from 'socket.io-client';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import SensorData from './models/SensorData';
import WebcamData from './models/WebcamData';
import MiningData from './models/MiningData';
import WSUpdateData from './models/WSUpdateData';
import { JsonMiningDump, JsonSensorDumpPi, JsonSensorDumpRig, JsonWebcamDump, JsonWSUpdateDump } from './shared';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { SensorHistory } from './components/SensorHistory/SensorHistory';
import { WebcamOverview } from './components/WebcamOverview/WebcamOverview';
import { NotFound } from './components/NotFound/NotFound';
import { MiningOverview } from './components/MiningOverview/MiningOverview';
import WeatherSummary from './components/WeatherSummary/WeatherSummary';
import { PlantComponent } from './components/PlantComponent/PlantComponent';
import VentData from './models/VentData';

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
  }

  componentDidMount() {
    // Load debug data if in debug mode. Use this for development if the socket is down.
    if (process.env.REACT_APP_DEBUG === 'true') {
      this.setState({ sensorData: new SensorData(true) });
    }
    this.connectToSocket();
  }

  componentWillUnmount() {
    this.socket.close();
  }

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
            ventData: this.state.ventData.update(data.air),
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

  handleServiceListOpen = () => {
    this.setState({ isServiceListOpen: true });
  };

  handleServiceListClose = () => {
    this.setState({ isServiceListOpen: false });
  };

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
              <Link to="/plant">
                <Nav.Item className="mr-5">
                  Plant
                  <span className="jam jam-branch ml-2" />
                </Nav.Item>
              </Link>
              <Link to="/history/intakecoolant/day">
                <Nav.Item className="mr-5">
                  History
                  <span className="jam jam-history ml-2" />
                </Nav.Item>
              </Link>
              <Link to="/webcams">
                <Nav.Item className="mr-5">
                  Webcams
                  <span className="jam jam-camera-alt ml-2" />
                </Nav.Item>
              </Link>
              <Link to="/mining">
                <Nav.Item className="mr-5">
                  Mining
                  <span className="jam jam-coin ml-2" />
                </Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown
            alignRight
            title={
              this.socket.connected ? (
                <span className={this.state.allServicesOnline ? 'service-online' : 'service-problem'}>Online</span>
              ) : (
                <span className={'service-offline'}>Offline</span>
              )
            }
            id="status-nav-dropdown"
            onMouseEnter={this.handleServiceListOpen}
            onMouseLeave={this.handleServiceListClose}
            show={this.state.isServiceListOpen}
          >
            <NavDropdown.Header>Services</NavDropdown.Header>
            <NavDropdown.Divider />
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
              mining (rig)
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>

        <Container>
          <Switch>
            <Route exact path="/">
              <Dashboard sensorData={this.state.sensorData} />
              <WeatherSummary />
            </Route>
            <Route exact path="/plant">
              <PlantComponent ventData={this.state.ventData} />
            </Route>
            <Route exact path="/mining">
              <MiningOverview miningData={this.state.miningData} />
            </Route>
            <Route exact path="/history/:sensor/:scope" component={SensorHistory} />
            <Route exact path="/webcams">
              <WebcamOverview webcamData={this.state.webcamData} />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
