import * as React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { RouteChildrenProps } from 'react-router';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import HistoryApi from '../../models/HistoryApi';
import {
  apiRequestOptions,
  HistoryApiEndpoint,
  HistoryGraph,
  HistoryScope,
  reduceSeries,
  SensorIdentifier,
} from '../../shared';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';

interface State {
  historyGraphs: HistoryGraph[];
}

interface HistoryNavParams {
  sensor: string;
  scope: string;
}

const initialState = { historyGraphs: [] };

export class SensorHistory extends React.Component<RouteChildrenProps<HistoryNavParams>, State> {
  historyApi: HistoryApi;

  constructor(props: RouteChildrenProps<HistoryNavParams>) {
    super(props);

    this.historyApi = new HistoryApi(
      this.props.match!.params.sensor as SensorIdentifier,
      this.props.match!.params.scope as HistoryScope,
    );

    if (!this.historyApi.paramsValid()) {
      this.props.history.push('/404');
    }

    this.state = initialState;
  }

  async componentDidMount() {
    await this.fetchHistory();
  }

  fetchHistory = async () => {
    if (!this.historyApi.paramsValid()) {
      return;
    }

    this.setState(initialState);

    await Promise.all(
      this.historyApi.endpoints().map(async (endpoint: HistoryApiEndpoint, index: number) => {
        const response = await fetch(`${HistoryApi.API}/${endpoint.path}/${this.historyApi.scope}`, apiRequestOptions);
        let history = await response.json();

        history = reduceSeries(history, 100, this.historyApi.attributes()[index]);

        this.setState({
          historyGraphs: [
            {
              labels: history.map((o: any) => o['time']),
              data: history.map((o: any) => o[this.historyApi.attributes()[index]]),
              scope: this.historyApi.scope,
              ...this.historyApi.graphProps()[index],
            },
            ...this.state.historyGraphs,
          ],
        });
      }),
    );
  };

  reloadComponent = async (options: { scope?: HistoryScope; sensor?: SensorIdentifier }) => {
    if (options.scope) {
      if (this.historyApi.validScopeChange(options.scope)) {
        return;
      }
      this.historyApi.scope = options.scope;
    } else if (options.sensor) {
      if (this.historyApi.validSensorChange(options.sensor)) {
        return;
      }
      this.historyApi.sensor = options.sensor;
    } else {
      return;
    }

    this.props.history.push(`/history/${this.historyApi.sensor}/${this.historyApi.scope}`);
    await this.fetchHistory();
  };

  graphColumnWidth = () => {
    const graphCount = this.historyApi.endpoints().length;
    if (graphCount === 1) {
      return { span: 8, offset: 2 };
    }
    return { span: 12 / graphCount };
  };

  renderTitle = () => (
    <h1 className="display-4 text-muted mt-5">
      The <u>{this.historyApi.getSensorName()}</u> over the last <u>{this.historyApi.scope}</u>
    </h1>
  );

  renderScopeSelect = () => (
    <Row>
      {HistoryApi.SCOPES.map((scope: string) => (
        <Col className="text-center my-4" key={scope}>
          <Button
            className="btn-round"
            disabled={scope === this.historyApi.scope}
            onClick={() => this.reloadComponent({ scope: scope as HistoryScope })}
          >
            {scope.charAt(0).toUpperCase()}
          </Button>
        </Col>
      ))}
    </Row>
  );

  renderSensorSelect = () => (
    <>
      <h1 className="display-4 text-muted mt-5">Other sensors</h1>
      <Row className="mt-5">
        {this.historyApi.otherSensors().map((sensor: string) => (
          <Col className="mb-4 content-middle" key={sensor}>
            <Link to={`/history/${sensor}/${this.historyApi.scope}`}>
              <span
                onClick={() => this.reloadComponent({ sensor: sensor as SensorIdentifier })}
                className="slim text-muted"
              >
                {this.historyApi.getSensorName(sensor as SensorIdentifier).toUpperCase()}
              </span>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );

  render = () => {
    if (!this.historyApi.paramsValid()) {
      return null;
    }

    return (
      <div className="mt-5">
        {this.state.historyGraphs.length === this.historyApi.endpoints().length ? (
          <>
            {this.renderTitle()}
            {this.renderScopeSelect()}
            <Row>
              {this.state.historyGraphs.map((historyGraph: HistoryGraph) => (
                <Col md={this.graphColumnWidth()} className="card history-card" key={historyGraph.title}>
                  <SimpleLineChart {...historyGraph} />
                </Col>
              ))}
            </Row>
            {this.renderSensorSelect()}
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  };
}
