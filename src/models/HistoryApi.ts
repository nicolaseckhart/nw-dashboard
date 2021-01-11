import { GraphProps, HistoryApiEndpoint, HistoryScope, SensorIdentifier } from '../shared';
import { CardAccent } from '../shared/interfaces';

/* eslint-disable @typescript-eslint/camelcase */

export default class HistoryApi {
  static readonly API = process.env.REACT_APP_API_HOST;
  static readonly SCOPES = ['day', 'week', 'month', 'year'];
  static readonly SENSORS = {
    bloom_tent: {
      name: 'Bloom Tent',
      environment: 'air',
      apiEndpoints: [
        {
          path: 'air/temperature/bloom_tent',
          attribute: 'air_bloom_tent_temperature',
          graphProps: {
            title: 'Temperature',
            units: '°C',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'blue' as CardAccent,
          },
        },
        {
          path: 'air/humidity/bloom_tent',
          attribute: 'air_bloom_tent_humidity',
          graphProps: {
            title: 'Humidity',
            units: '%',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'blue' as CardAccent,
          },
        },
      ],
    },
    grow_tent: {
      name: 'Grow Tent',
      environment: 'air',
      apiEndpoints: [
        {
          path: 'air/temperature/grow_tent',
          attribute: 'air_grow_tent_temperature',
          graphProps: {
            title: 'Temperature',
            units: '°C',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'red' as CardAccent,
          },
        },
        {
          path: 'air/humidity/grow_tent',
          attribute: 'air_grow_tent_humidity',
          graphProps: { title: 'Humidity', units: '%', suggestedMin: 0, suggestedMax: 40, accent: 'red' as CardAccent },
        },
      ],
    },
    heater: {
      name: 'Heater',
      environment: 'air',
      apiEndpoints: [
        {
          path: 'air/temperature/heater',
          attribute: 'air_heater_temperature',
          graphProps: {
            title: 'Temperature',
            units: '°C',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'red' as CardAccent,
          },
        },
        {
          path: 'air/humidity/heater',
          attribute: 'air_heater_humidity',
          graphProps: {
            title: 'Humidity',
            units: '%',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'red' as CardAccent,
          },
        },
      ],
    },
    room: {
      name: 'Room',
      environment: 'air',
      apiEndpoints: [
        {
          path: 'air/temperature/room',
          attribute: 'air_room_temperature',
          graphProps: {
            title: 'Temperature',
            units: '°C',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'blue' as CardAccent,
          },
        },
        {
          path: 'air/humidity/room',
          attribute: 'air_room_humidity',
          graphProps: {
            title: 'Humidity',
            units: '%',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'blue' as CardAccent,
          },
        },
      ],
    },
    water: {
      name: 'Water',
      environment: 'water',
      apiEndpoints: [
        {
          path: 'water/temperature',
          attribute: 'water_temp',
          graphProps: {
            title: 'Temperature',
            units: '°C',
            suggestedMin: 0,
            suggestedMax: 40,
            accent: 'lightblue' as CardAccent,
          },
        },
        {
          path: 'water/level',
          attribute: 'water_level',
          graphProps: {
            title: 'Water Level',
            units: '',
            suggestedMin: 0,
            suggestedMax: 5,
            accent: 'lightblue' as CardAccent,
          },
        },
      ],
    },
    do: {
      name: 'Dissolved Oxygen (DO)',
      environment: 'water',
      apiEndpoints: [
        {
          path: 'water/do/value',
          attribute: 'water_do_value',
          graphProps: {
            title: 'Dissolved Oxygen',
            units: 'mg/L',
            suggestedMin: 0,
            suggestedMax: 20,
            accent: 'lightblue' as CardAccent,
          },
        },
      ],
    },
    ph: {
      name: 'pH Value',
      environment: 'water',
      apiEndpoints: [
        {
          path: 'water/ph/value',
          attribute: 'water_ph_value',
          graphProps: { title: 'pH Value', units: '', suggestedMin: 0, suggestedMax: 1, accent: 'pink' as CardAccent },
        },
      ],
    },
    tds: {
      name: 'Total Dissolved Solids (TDS)',
      environment: 'water',
      apiEndpoints: [
        {
          path: 'water/tds/value',
          attribute: 'water_tds_value',
          graphProps: {
            title: 'Total Dissolved Solids',
            units: 'ppm',
            suggestedMin: 0,
            suggestedMax: 2000,
            accent: 'yellow' as CardAccent,
          },
        },
      ],
    },
  };
  sensor: SensorIdentifier;
  scope: HistoryScope;

  constructor(sensor: SensorIdentifier, scope: HistoryScope) {
    this.sensor = sensor;
    this.scope = scope;
  }

  paramsValid(): boolean {
    return HistoryApi.SENSORS[this.sensor] && HistoryApi.SCOPES.indexOf(this.scope) > -1;
  }

  getEnvironment(): string {
    return HistoryApi.SENSORS[this.sensor].environment;
  }

  endpoints(): HistoryApiEndpoint[] {
    return HistoryApi.SENSORS[this.sensor].apiEndpoints;
  }

  getSensorName(identifier?: SensorIdentifier): string {
    if (identifier) {
      return HistoryApi.SENSORS[identifier].name;
    }
    return HistoryApi.SENSORS[this.sensor].name;
  }

  attributes(): string[] {
    return this.endpoints().map((endpoint: HistoryApiEndpoint) => endpoint.attribute);
  }

  titles(): string[] {
    return this.endpoints().map((endpoint: HistoryApiEndpoint) => endpoint.graphProps.title);
  }

  graphProps(): GraphProps[] {
    return this.endpoints().map((endpoint: HistoryApiEndpoint) => endpoint.graphProps);
  }

  otherSensors(): string[] {
    return Object.keys(HistoryApi.SENSORS).filter((s) => s !== this.sensor);
  }

  validScopeChange(scope: HistoryScope) {
    return HistoryApi.SCOPES.indexOf(scope) === -1 || scope === this.scope;
  }

  validSensorChange(sensor: SensorIdentifier) {
    return Object.keys(HistoryApi.SENSORS).indexOf(sensor) === -1 || sensor === this.sensor;
  }
}
