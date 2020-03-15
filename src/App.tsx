import * as React from 'react';
import io from 'socket.io-client';
import { Container, Nav, Navbar } from 'react-bootstrap';
import SensorData from './models/SensorData';
import WebcamData from './models/WebcamData';
import MiningData from './models/MiningData';
import { JsonMiningDump, JsonSensorDump, JsonWebcamDump } from './shared';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { SensorHistory } from './components/SensorHistory/SensorHistory';
import { WebcamOverview } from './components/WebcamOverview/WebcamOverview';
import { NotFound } from './components/NotFound/NotFound';
import { MiningOverview } from './components/MiningOverview/MiningOverview';
import WeatherSummary from './components/WeatherSummary/WeatherSummary';
import SocketDownMessage from './components/SocketDownMessage/SocketDownMessage';

interface State {
  sensorData: SensorData | null;
  webcamData: WebcamData | null;
  miningData: MiningData | null;
}

export class App extends React.Component<{}, State> {
  socket: SocketIOClient.Socket;
  disconnected = true;
  socketDisconnected = false;

  constructor(props: {}) {
    super(props);
    this.state = { sensorData: null, webcamData: null, miningData: null };
    this.socket = this.createSocket();
  }

  componentDidMount() {
    // Load debug data if in debug mode. Use this for development if the socket is down.
    if (process.env.REACT_APP_DEBUG) {
      this.setState({ sensorData: new SensorData(), webcamData: new WebcamData() });
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
        this.socket.on('nwmon', (data: JsonSensorDump) => {
          this.setState({ sensorData: new SensorData(data) });
          this.disconnected = false;
          this.socketDisconnected = false;
        });
        this.socket.on('nwcam', (data: JsonWebcamDump) => {
          this.setState({ webcamData: new WebcamData(data) });
          this.disconnected = false;
          this.socketDisconnected = false;
        });
        this.socket.on('mining-stats', (data: JsonMiningDump) => {
          this.setState({ miningData: new MiningData(data) });
        });
      });
    });

    setTimeout(() => {
      if (this.disconnected) {
        this.socketDisconnected = true;
      }
    }, 4000);
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
              <Link to="/mining">
                <Nav.Item className="mr-5">
                  Mining
                  <span className="jam jam-coin ml-2" />
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          {this.socketDisconnected && <SocketDownMessage />}
          <Switch>
            <Route exact path="/">
              <Dashboard sensorData={this.state.sensorData} />
              <WeatherSummary />
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
