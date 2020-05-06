import * as React from 'react';
import { Col } from 'react-bootstrap';

export const PlantController: React.FC = () => {
  return (
    <Col md={{ span: 12 }}>
      <img id="plant" src="plant_v0.1.svg" alt="Kiwi standing on oval" />
    </Col>
  );
};
