export type CardAccent = 'red' | 'green' | 'blue' | 'lightblue' | 'pink' | 'yellow';
export type SensorEnvironment = 'air' | 'water';
export type SensorIdentifier = 'intakecoolant' | 'intakeheatant' | 'tent' | 'water' | 'do' | 'ph' | 'tds';
export type HistoryScope = 'day' | 'week' | 'month' | 'year';
export type WebcamIdentifier = 'cam0' | 'cam1';

export interface DailyWeather {
  current: {
    temperature: number;
    summary: string;
    icon: string;
  };
  day: {
    temperatureMax: number;
    temperatureMin: number;
    summary: string;
    icon: string;
  };
}

export interface GraphProps {
  title: string;
  units: string;
  accent: CardAccent;
  suggestedMin: number;
  suggestedMax: number;
}

export interface HistoryGraph extends GraphProps {
  labels: Array<any>;
  data: Array<any>;
  title: string;
  scope: HistoryScope;
}

export interface HistoryApiEndpoint {
  path: string;
  attribute: string;
  graphProps: GraphProps;
}

export interface Sensor {
  name: string;
  identifier: SensorIdentifier;
  environment: SensorEnvironment;
  accent?: CardAccent;
  data: SensorMeasurement[];
}

export interface SensorMeasurement {
  name?: string;
  value: number | string;
  icon?: string;
  unit?: string;
}

export interface Vent {
  name: string;
  open: boolean;
}

export interface Webcam {
  identifier: WebcamIdentifier;
  image: string;
}

export interface MiningRig {
  id: number;
  totalHashRate: number;
  totalHashRateEth: number;
  totalHashRateDcr: number;
  graphicsCards: GraphicsCard[];
}

export interface GraphicsCard {
  name: string;
  identifier: string;
  temperature: number;
  fan: number;
  hashRateEth: number;
  hashRateDcr: number;
}

export interface WSUpdate {
  type: string;
  clients: string[];
}

export interface JsonSensorDumpPi {
  air: {
    intake_coolant: {
      temperature: string;
      humidity: string;
    };
    intake_heatant: {
      temperature: string;
      humidity: string;
    };
    tent: {
      temperature: string;
      humidity: string;
    };
  };
}

export interface JsonVentDump {
  heatant: string;
  coolant: string;
  bypass: string;
}

export interface JsonSensorDumpRig {
  air: JsonVentDump;
  water: {
    temperature: number;
    level: string;
    DO: {
      value: number;
      units: string;
    };
    PH: {
      voltage: number;
      value: number;
      units: string;
    };
    TDS: {
      voltage: number;
      value: number;
      units: string;
    };
  };
}

export interface JsonWebcamDump {
  cam0?: string;
  cam1?: string;
}

export interface PlantEvent {
  time: string;
  device: string;
  description: string;
}

export interface JsonPlantEvent {
  time: string;
  device: string;
  description: string;
}

export interface JsonEventLogDump {
  events: PlantEvent[];
}

export interface JsonMiningDump {
  id: number;
  miner_version: string;
  running_time: string;
  total_hashrate_eth: string;
  accepted_shares_eth: string;
  rejected_shares_eth: string;
  detailed_hashrates_eth: {
    GPU0: string;
    GPU1: string;
    GPU2: string;
    GPU3: string;
  };
  total_hashrate_dcr: string;
  accepted_shares_dcr: string;
  rejected_shares_dcr: string;
  detailed_hashrates_dcr: {
    GPU0: string;
    GPU1: string;
    GPU2: string;
    GPU3: string;
  };
  gpu_infos: {
    GPU0: {
      temp: string;
      fan: string;
    };
    GPU1: {
      temp: string;
      fan: string;
    };
    GPU2: {
      temp: string;
      fan: string;
    };
    GPU3: {
      temp: string;
      fan: string;
    };
  };
  mining_pools: {
    eth: string;
    dcr: string;
  };
}

export interface JsonWSUpdateDump {
  type: string;
  clients: string[];
}
