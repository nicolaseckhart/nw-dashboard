import { Row } from 'react-bootstrap';
import { Sensor } from '../../shared';
import { SensorCard } from '../SensorCard/SensorCard';
import * as React from 'react';
import SensorData from '../../models/SensorData';
import { Loading } from '../Loading/Loading';

interface Props {
  sensorData: SensorData | null;
}

export const Dashboard: React.FC<Props> = ({ sensorData }: Props) => (
  <div className="mt-5">
    {sensorData !== null && (
      <>
        {SensorData.ENVIRONMENTS.map(environment => (
          <div key={environment.identifier}>
            <h1 className="display-4">{environment.title}</h1>
            <Row>
              {sensorData.environmentSensors(environment.identifier).map((sensor: Sensor, index: number) => (
                <SensorCard key={index} sensor={sensor} />
              ))}
            </Row>
          </div>
        ))}
      </>
    )}
    {(sensorData === null || sensorData.sensors.length === 0) && <Loading />}
  </div>
);
