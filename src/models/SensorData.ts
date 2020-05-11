import { SensorMeasurement, Sensor, JsonSensorDumpRig, JsonSensorDumpPi } from '../shared';

export default class SensorData {
  public static readonly ENVIRONMENTS: Array<{ title: string; identifier: 'air' | 'water' }> = [
    { title: 'Air Sensors', identifier: 'air' },
    { title: 'Water Sensors', identifier: 'water' },
  ];
  sensors: Sensor[];

  constructor(debug = false) {
    this.sensors = debug ? SensorData.DEBUG_DATA : [];
  }

  environmentSensors(environment: 'air' | 'water'): Sensor[] {
    return this.sensors.filter((sensor: Sensor) => sensor.environment === environment);
  }

  update(json: JsonSensorDumpPi | JsonSensorDumpRig, type: 'pi' | 'rig'): SensorData {
    if (type === 'pi') {
      this.sensors = [
        ...this.sensors.filter((sensor) => !['intakecoolant', 'intakeheatant', 'tent'].includes(sensor.identifier)),
        ...SensorData.deserializePiData(json as JsonSensorDumpPi),
      ];
    } else if (type === 'rig') {
      this.sensors = [
        ...this.sensors.filter((sensor) => !['water', 'do', 'ph', 'tds'].includes(sensor.identifier)),
        ...SensorData.deserializeRigData(json as JsonSensorDumpRig),
      ];
    }

    return this;
  }

  static deserializePiData(json: JsonSensorDumpPi): Sensor[] {
    return [
      {
        name: 'Intake Coolant',
        environment: 'air',
        identifier: 'intakecoolant',
        accent: 'blue',
        data: [
          {
            name: 'Temperature',
            value: Number(json.air.intake_coolant.temperature),
            unit: ' °C',
            icon: 'temperature',
            condition: 'check', // TODO create lookup table and determine if value is ok or not
          } as SensorMeasurement,
          {
            name: 'Humidity',
            value: Number(json.air.intake_coolant.humidity),
            unit: '%',
            icon: 'cloud',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
      {
        name: 'Intake Heatant',
        environment: 'air',
        identifier: 'intakeheatant',
        accent: 'red',
        data: [
          {
            name: 'Temperature',
            value: Number(json.air.intake_heatant.temperature),
            unit: ' °C',
            icon: 'temperature',
            condition: 'check',
          } as SensorMeasurement,
          {
            name: 'Humidity',
            value: Number(json.air.intake_heatant.humidity),
            unit: '%',
            icon: 'cloud',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
      {
        name: 'Tent',
        environment: 'air',
        identifier: 'tent',
        accent: 'green',
        data: [
          {
            name: 'Temperature',
            value: Number(json.air.tent.temperature),
            unit: ' °C',
            icon: 'temperature',
            condition: 'check',
          } as SensorMeasurement,
          {
            name: 'Humidity',
            value: Number(json.air.tent.humidity),
            unit: '%',
            icon: 'cloud',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
    ];
  }

  static deserializeRigData(json: JsonSensorDumpRig): Sensor[] {
    return [
      {
        name: 'Water',
        environment: 'water',
        identifier: 'water',
        accent: 'lightblue',
        data: [
          {
            name: 'Temperature',
            value: Number(json.water.temperature),
            unit: ' °C',
            icon: 'temperature',
            condition: 'check',
          } as SensorMeasurement,
          {
            name: 'Level',
            value: json.water.level,
            icon: 'water-drop-f',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
      {
        name: 'Dissolved Oxygen',
        environment: 'water',
        identifier: 'do',
        data: [
          {
            value: Number(json.water.DO.value),
            unit: json.water.DO.units,
            icon: 'water-drop',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
      {
        name: 'pH Value',
        environment: 'water',
        identifier: 'ph',
        data: [
          {
            value: Number(json.water.PH.value),
            unit: json.water.PH.units,
            icon: 'water-drop',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
      {
        name: 'Total Dissolved Solids',
        environment: 'water',
        identifier: 'tds',
        data: [
          {
            value: Number(json.water.TDS.value),
            unit: json.water.TDS.units,
            icon: 'water-drop',
            condition: 'check',
          } as SensorMeasurement,
        ],
      } as Sensor,
    ];
  }

  private static readonly DEBUG_DATA: Sensor[] = [
    ...SensorData.deserializeRigData(
      JSON.parse(
        '{"water":{"temperature":-127,"level":"Low","DO":{"value":6.51,"units":"mg/L"},"PH":{"voltage":0,"value":0.12,"units":""},"TDS":{"voltage":1.9,"value":813,"units":"ppm"}}}',
      ),
    ),
    ...SensorData.deserializePiData(
      JSON.parse(
        '{"air":{"intake_coolant":{"temperature":"14.9","humidity":"50.4"},"intake_heatant":{"temperature":"0.0","humidity":"0.0"},"tent":{"temperature":"20.6","humidity":"34.5"}}}',
      ),
    ),
  ];
}
