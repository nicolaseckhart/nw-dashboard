import { JsonEventLogDump } from '../shared';
import PlantEventData from './PlantEventData';

export default class EventLogData {
  events: PlantEventData[];

  constructor(json?: JsonEventLogDump) {
    if (json) {
      this.events = EventLogData.deserialize(json);
    } else {
      this.events = EventLogData.deserialize({
        events: [
          {
            time: '2020-02-18T17:40:03.000Z',
            device: 'PUMP_PH_UP',
            description: '(TEST) Added 5ml (Automated action - detected low pH level (4.6)',
          },
          {
            time: '2020-02-18T17:56:48.000Z',
            device: 'PUMP_BLOOM',
            description: '(TEST) Added 20ml (Triggered by user xx)',
          },
        ],
      });
    }
  }

  static deserialize(json: JsonEventLogDump): PlantEventData[] {
    const eventLog: PlantEventData[] = [];
    json.events.forEach((event) => {
      eventLog.push(new PlantEventData(event));
    });

    return eventLog;
  }
}
