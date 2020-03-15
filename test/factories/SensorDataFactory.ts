import SensorData from '../../src/models/SensorData';
import { JsonSensorDump } from '../../src/shared';

export const getJsonSensorDump = (): JsonSensorDump =>
  JSON.parse(
    '{"air":{"intake_coolant":{"temperature":"14.9","humidity":"50.4"},"intake_heatant":{"temperature":"0.0","humidity":"0.0"},"tent":{"temperature":"20.6","humidity":"34.5"}},"water":{"temperature":-127,"level":"Low","DO":{"value":6.51,"units":"mg/L"},"PH":{"voltage":0,"value":0.12,"units":""},"TDS":{"voltage":1.9,"value":813,"units":"ppm"}}}',
  );

export const getSensorData = (): SensorData => {
  return new SensorData(getJsonSensorDump());
};
