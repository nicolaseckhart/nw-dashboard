import * as React from 'react';
import PlantState from '../../models/PlantState';
import GrowthProgram from '../../models/GrowthProgram';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { PlantGraphic } from './PlantGraphic';

interface State {
  plantState: PlantState;
  modalShown: boolean;
}

export class PlantComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      plantState: new PlantState(),
      modalShown: false,
    };
  }

  handleClose = () => this.setState({ modalShown: false });
  handleShow = () => this.setState({ modalShown: true });

  renderGrowthProgramInfo = () => (
    <Row>
      <Col className="text-center">
        <p className="text-light">
          <b>Plant Date:</b>
          <br />
          {this.state.plantState.readablePlantDate()}
        </p>
      </Col>
      <Col className="text-center">
        <p className="text-light">
          <b>Current Week:</b>
          <br />
          {GrowthProgram.getWeek(this.state.plantState.plantDate)}
        </p>
      </Col>
      <Col className="text-center">
        <p className="text-light">
          <b>Upcoming Week:</b>
          <br />
          {GrowthProgram.getUpcomingWeek(this.state.plantState.plantDate)}
        </p>
      </Col>
    </Row>
  );

  renderPlantInputField = (num: number, value: string) => (
    <Form.Group as={Col} controlId={`plant${num}`}>
      <Form.Label>Plant {num}</Form.Label>
      <Form.Control type="text" placeholder={`Plant ${num}`} value={value} disabled />
    </Form.Group>
  );

  render = () => (
    <div className="mt-5">
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
            <Form.Control placeholder="Plant Date" value={this.state.plantState.readablePlantDate()} disabled />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {this.renderGrowthProgramInfo()}

      <PlantGraphic plantState={this.state.plantState} />

      <div className="nw-button" onClick={this.handleShow}>
        <span className="jam jam-cog" />
      </div>
    </div>
  );
}
