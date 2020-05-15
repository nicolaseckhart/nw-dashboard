import * as React from 'react';
import PlantState from '../../models/PlantState';
import GrowthProgram from '../../models/GrowthProgram';
import { Col, Form, Row } from 'react-bootstrap';
import { PlantGraphic } from './PlantGraphic';
import VentData from '../../models/VentData';
import { apiPostRequestOptions, apiRequestOptions, uriEncode } from '../../shared';
import SensorData from '../../models/SensorData';
import { FormModal } from '../UiComponents/FormModal';
import { NwButton } from '../UiComponents/NwButton';

interface State {
  plantState: PlantState | null;
  modalsShown: { edit: boolean; create: boolean };
}

interface Props {
  ventData: VentData;
  sensorData: SensorData;
}

export class PlantComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantState: null,
      modalsShown: { edit: false, create: false },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchPlantState();
  }

  fetchPlantState = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/plant/1`, apiRequestOptions)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          plantState: new PlantState(response[0]['id'], response[0]['startTime'], response[0]['plantNames']),
        });
      });
  };

  updatePlantState = () => {
    const body = uriEncode([
      { id: this.state.plantState!.id },
      { startTime: this.state.plantState!.serializeStartTime() },
      { plantNames: this.state.plantState!.serializePlantNames() },
    ]);

    fetch(`${process.env.REACT_APP_API_HOST}/plant/update`, apiPostRequestOptions(body)).then(this.closeModals);
  };

  createPlantState = async () => {
    const body = uriEncode([{ plantNames: PlantState.defaultPlantNames() }]);

    fetch(`${process.env.REACT_APP_API_HOST}/plant/create`, apiPostRequestOptions(body)).then(() => {
      this.fetchPlantState();
      this.closeModals();
    });
  };

  closeModals = () => this.setState({ modalsShown: { edit: false, create: false } });
  openEditModal = () => this.setState({ modalsShown: { edit: true, create: false } });
  openCreateModal = () => this.setState({ modalsShown: { edit: false, create: true } });

  handleInputChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ plantState: this.state.plantState!.update(name, value) });
  };

  renderPlantStateInfo = () => {
    const infoBlock = (title: string, content: string) => (
      <Col className="text-center">
        <p className="text-light">
          <b>{title}:</b>
          <br />
          {content}
        </p>
      </Col>
    );

    if (!this.state.plantState) return null;
    return (
      <Row>
        {infoBlock('Plant Date', this.state.plantState.readableStartTime())}
        {infoBlock('Current Week', GrowthProgram.getWeek(this.state.plantState.startTime))}
        {infoBlock('Upcoming Week', GrowthProgram.getUpcomingWeek(this.state.plantState.startTime))}
      </Row>
    );
  };

  renderPlantInputField = (num: number, value: string) => (
    <Form.Group as={Col} controlId={`plant${num}`}>
      <Form.Label>Plant {num}</Form.Label>
      <Form.Control name={`plant${num}`} type="text" value={value} onChange={this.handleInputChange} />
    </Form.Group>
  );

  renderEditModalBody = () => {
    if (!this.state.plantState) return null;
    return (
      <>
        <Form.Row>
          {this.renderPlantInputField(1, this.state.plantState.plant1)}
          {this.renderPlantInputField(2, this.state.plantState.plant2)}
        </Form.Row>
        <Form.Row>
          {this.renderPlantInputField(3, this.state.plantState.plant3)}
          {this.renderPlantInputField(4, this.state.plantState.plant4)}
        </Form.Row>
        <Form.Group controlId="plantDate">
          <Form.Label>Plant Date</Form.Label>
          <Form.Control value={this.state.plantState.readableStartTime()} disabled />
        </Form.Group>
      </>
    );
  };

  renderCreateModalBody = () => <p>Are you sure you want to start a new cycle?</p>;

  findSensorTemperatureMeasurement = (identifier: string) => {
    const sensor = this.props.sensorData.sensors.find((s) => s.identifier === identifier);
    if (sensor) {
      return sensor.data.find((m) => m.name === 'Temperature');
    }
  };

  render = () => {
    if (!this.state.plantState) return null;
    return (
      <div className="mt-5 card plant-card">
        <FormModal
          shownState={this.state.modalsShown.edit}
          title="Edit Plant State"
          submitText="Submit"
          submitFn={this.updatePlantState}
          closeText="Cancel"
          closeFn={this.closeModals}
          renderBodyFn={this.renderEditModalBody}
        />

        <FormModal
          shownState={this.state.modalsShown.create}
          title="Confirmation"
          submitText="Confirm"
          submitFn={this.createPlantState}
          closeText="Cancel"
          closeFn={this.closeModals}
          renderBodyFn={this.renderCreateModalBody}
        />

        {this.renderPlantStateInfo()}

        <Row>
          <Col md={{ span: 12 }}>
            <PlantGraphic
              plantState={this.state.plantState}
              ventData={this.props.ventData}
              coolantTemp={this.findSensorTemperatureMeasurement('intakecoolant')}
              heatantTemp={this.findSensorTemperatureMeasurement('intakeheatant')}
              tentTemp={this.findSensorTemperatureMeasurement('tent')}
            />
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <NwButton icon="pencil" action={this.openEditModal} />
          </Col>
          <Col md={{ span: 2 }}>
            <NwButton icon="plus-circle" action={this.openCreateModal} />
          </Col>
        </Row>
      </div>
    );
  };
}
