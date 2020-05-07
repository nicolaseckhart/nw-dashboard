import { JsonPlantEvent, PlantEvent } from '../shared';

export default class PlantEventData {
  event: PlantEvent;

  constructor(json: JsonPlantEvent) {
    this.event = PlantEventData.deserialize(json);
  }

  static deserialize(json: JsonPlantEvent): PlantEvent {
    return {
      time: json.time,
      device: json.device,
      description: json.description,
    };
  }
}
