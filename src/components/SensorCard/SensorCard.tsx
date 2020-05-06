import * as React from 'react';
import { Sensor, SensorMeasurement } from '../../shared';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  sensor: Sensor;
}

export const SensorCard: React.FC<Props> = ({ sensor }: Props) => {
  const historyLink = `/history/${sensor.identifier}/day`;

  const renderSensorMeasurement = (measurement: SensorMeasurement, key: number) => (
    <Row key={key}>
      <Col xs={{ span: 1 }}>
        <span className={`jam jam-${measurement.icon}`} />
      </Col>
      {measurement.name && <Col xs={{ span: 7 }}>{measurement.name}</Col>}
      <Col xs={{ span: 2 }} className="text-right text-nowrap">
        {measurement.value}
      </Col>
      <Col xs={{ span: 1 }} className="pl-0">
        {measurement.unit}
      </Col>
    </Row>
  );

  return (
    <Col md={{ span: 4 }} className="my-3">
      <Link to={historyLink}>
        <div className={`info-card ${sensor.accent}-accent`}>
          <h4 className="text-muted font-weight-lighter">{sensor.name}</h4>
          {sensor.data.map((m: SensorMeasurement, i: number) => renderSensorMeasurement(m, i))}
        </div>
      </Link>
    </Col>
  );
};
