import * as React from 'react';
import PlantState from '../../models/PlantState';
import GrowthProgram from '../../models/GrowthProgram';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { PlantGraphic } from './PlantGraphic';
import VentData from '../../models/VentData';
import { apiRequestOptions } from '../../shared';

interface State {
  plantState: PlantState | null;
  modalShown: boolean;
}

interface Props {
  ventData: VentData;
}

export class PlantComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plantState: null,
      modalShown: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    const response = await this.fetchPlantData();
    this.setPlantState(response);
  }

  fetchPlantData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/plant/1`, apiRequestOptions);
    return response.json();
  };

  setPlantState = (response: any) => {
    this.setState({
      plantState: new PlantState(response[0]['id'], response[0]['startTime'], response[0]['plantNames']),
    });
  };

  handleClose = () => this.setState({ modalShown: false });
  handleShow = () => this.setState({ modalShown: true });

  handleInputChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      plantState: this.state.plantState!.update(name, value),
    });
  };

  handleSubmit = () => {
    const ps = this.state.plantState!;

    const formBody = [];
    formBody.push(encodeURIComponent('id') + '=' + encodeURIComponent(ps.id));
    formBody.push(encodeURIComponent('startTime') + '=' + encodeURIComponent(ps.startTime.toDate().toISOString()));
    formBody.push(encodeURIComponent('plantNames') + '=' + encodeURIComponent(ps.serializePlantNames()));
    const body = formBody.join('&');

    fetch(`${process.env.REACT_APP_API_HOST}/plant/update`, {
      method: 'POST',
      headers: new Headers({
        Authorization: process.env.REACT_APP_API_KEY as string,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: body,
    }).then(() => this.handleClose());
  };


  startNewPlantState = async () => {
    const urlData = `?plantNames=${encodeURI(PlantState.defaultPlantNames())}`;

    fetch(`${process.env.REACT_APP_API_HOST}/plant/create${urlData}`, {
      method: 'POST',
      headers: new Headers({
        Authorization: process.env.REACT_APP_API_KEY as string,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // TODO update state based on newly created state
  };

  renderGrowthProgramInfo = () => {
    if (!this.state.plantState) return null;
    return (
      <Row>
        <Col className="text-center">
          <p className="text-light">
            <b>Plant Date:</b>
            <br />
            {this.state.plantState.readableStartTime()}
          </p>
        </Col>
        <Col className="text-center">
          <p className="text-light">
            <b>Current Week:</b>
            <br />
            {GrowthProgram.getWeek(this.state.plantState.startTime)}
          </p>
        </Col>
        <Col className="text-center">
          <p className="text-light">
            <b>Upcoming Week:</b>
            <br />
            {GrowthProgram.getUpcomingWeek(this.state.plantState.startTime)}
          </p>
        </Col>
      </Row>
    );
  };

  renderPlantInputField = (num: number, value: string) => (
    <Form.Group as={Col} controlId={`plant${num}`}>
      <Form.Label>Plant {num}</Form.Label>
      <Form.Control name={`plant${num}`} type="text" value={value} onChange={this.handleInputChange} />
    </Form.Group>
  );

  renderEditPlantStateForm = () => {
    if (!this.state.plantState) return null;
    return (
      <Modal show={this.state.modalShown} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  render = () => {
    if (!this.state.plantState) return null;
    return (
      <div className="mt-5 card plant-card">
        {this.renderEditPlantStateForm()}
        {this.renderGrowthProgramInfo()}

        <PlantGraphic plantState={this.state.plantState} ventData={this.props.ventData} />

        <Row>
          <Col md={{ span: 2, offset: 4 }}>
            <div className="nw-button" onClick={this.handleShow}>
              <span className="jam jam-pencil" />
            </div>
          </Col>
          <Col md={{ span: 2 }}>
            <div className="nw-button">
              <span className="jam jam-plus-circle" onClick={this.startNewPlantState} />
            </div>
          </Col>
        </Row>
      </div>
    );
  };
}
