import * as React from 'react';
import { SensorCard } from './SensorCard';
import { shallow, ShallowWrapper } from 'enzyme';
import * as factories from '../../../test/factories';

function environmentSensorCard(): ShallowWrapper {
  const environmentSensor = factories.getSensorData().sensors[0];
  return shallow(<SensorCard sensor={environmentSensor} />);
}

describe('SensorCard', () => {
  it('renders the component correctly', () => {
    expect(environmentSensorCard()).toMatchSnapshot();
  });
});
