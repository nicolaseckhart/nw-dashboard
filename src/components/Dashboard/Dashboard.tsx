import { Row } from 'react-bootstrap';
import { Sensor } from '../../shared';
import { SensorCard } from '../SensorCard/SensorCard';
import * as React from 'react';
import SensorData from '../../models/SensorData';
import { Loading } from '../Loading/Loading';
import { Title } from '../UiComponents/Title';

interface Props {
  sensorData: SensorData;
}

export const Dashboard: React.FC<Props> = ({ sensorData }: Props) => (
  <div className="mt-5">
    {sensorData.sensors.length >= 0 && (
      <>
        {SensorData.ENVIRONMENTS.map((environment) => (
          <div key={environment.identifier}>
            <Title>{environment.title}</Title>
            <Row>
              {sensorData.environmentSensors(environment.identifier).map((sensor: Sensor, index: number) => (
                <SensorCard key={index} sensor={sensor} />
              ))}
            </Row>
          </div>
        ))}
      </>
    )}
    {sensorData.sensors.length === 0 && <Loading />}
  </div>
);
