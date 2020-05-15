import { SensorMeasurement, Sensor, JsonSensorDumpRig, JsonSensorDumpPi, Condition } from '../shared';
import condRules from '../data/conditionRules.json';

export default class SensorData {
  public static readonly ENVIRONMENTS: Array<{ title: string; identifier: 'air' | 'water' }> = [
    { title: 'Air Sensors', identifier: 'air' },
    { title: 'Water Sensors', identifier: 'water' },
  ];
  sensors: Sensor[];

  constructor() {
    this.sensors = [];
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
            condition: false,
          } as SensorMeasurement,
          {
            name: 'Humidity',
            value: Number(json.air.intake_coolant.humidity),
            unit: '%',
            icon: 'cloud',
            condition: false,
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
            condition: false,
          } as SensorMeasurement,
          {
            name: 'Humidity',
            value: Number(json.air.intake_heatant.humidity),
            unit: '%',
            icon: 'cloud',
            condition: false,
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
            condition: this.identifyCondition('tent_temp', Number(json.air.tent.temperature)),
          } as SensorMeasurement,
          {
            name: 'Humidity',
            value: Number(json.air.tent.humidity),
            unit: '%',
            icon: 'cloud',
            condition: this.identifyCondition('tent_humid', Number(json.air.tent.humidity)),
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
            condition: this.identifyCondition('water_temp', Number(json.water.temperature)),
          } as SensorMeasurement,
          {
            name: 'Level',
            value: json.water.level,
            icon: 'water-drop-f',
            condition: this.identifyCondition('water_level', json.water.level),
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
            condition: this.identifyCondition('water_do', Number(json.water.DO.value)),
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
            condition: this.identifyCondition('water_ph', Number(json.water.PH.value)),
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
            condition: this.identifyCondition('water_tds', Number(json.water.TDS.value)),
          } as SensorMeasurement,
        ],
      } as Sensor,
    ];
  }

  private static identifyCondition(name: string, value: number | string): Condition {
    if (typeof value === 'number') {
      if (value >= (condRules as any)[name].good_lb && value <= (condRules as any)[name].good_ub)
        return 'check' as Condition;
      if (value >= (condRules as any)[name].warning_lb && value <= (condRules as any)[name].warning_ub)
        return 'triangle-danger' as Condition;
    } else {
      if (value === 'Good') return 'check' as Condition;
      if (value === 'Low') return 'triangle-danger' as Condition;
    }
    return 'alert' as Condition;
  }
}
