import * as React from 'react';
import PlantState from '../../models/PlantState';
import GrowthProgram from '../../models/GrowthProgram';
import moment from 'moment';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { PlantGraphic } from './PlantGraphic';

export const PlantComponent: React.FC = () => {
  const plantState = new PlantState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderGrowthProgramInfo = () => (
    <Row>
      <Col className="text-center">
        <p className="text-light">
          <b>Plant Date:</b>
          <br />
          {plantState.getPlantDate()}
        </p>
      </Col>
      <Col className="text-center">
        <p className="text-light">
          <b>Current Week:</b>
          <br />
          {GrowthProgram.getWeek(moment().subtract(12, 'weeks'))}
        </p>
      </Col>
      <Col className="text-center">
        <p className="text-light">
          <b>Upcoming Week:</b>
          <br />
          {GrowthProgram.getUpcomingWeek(moment().subtract(12, 'weeks'))}
        </p>
      </Col>
    </Row>
  );

  const renderPlantInputField = (num: number, value: string) => (
    <Form.Group as={Col} controlId={`plant${num}`}>
      <Form.Label>Plant {num}</Form.Label>
      <Form.Control type="text" placeholder={`Plant ${num}`} value={value} disabled />
    </Form.Group>
  );

  return (
    <div className="mt-5">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            {renderPlantInputField(1, plantState.plant1)}
            {renderPlantInputField(2, plantState.plant2)}
          </Form.Row>

          <Form.Row>
            {renderPlantInputField(3, plantState.plant3)}
            {renderPlantInputField(4, plantState.plant4)}
          </Form.Row>

          <Form.Group controlId="plantDate">
            <Form.Label>Plant Date</Form.Label>
            <Form.Control placeholder="Plant Date" value={plantState.getPlantDate()} disabled />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {renderGrowthProgramInfo()}

      <PlantGraphic plantState={plantState} />

      <div className="nw-button" onClick={handleShow}>
        <span className="jam jam-cog" />
      </div>
    </div>
  );
};
