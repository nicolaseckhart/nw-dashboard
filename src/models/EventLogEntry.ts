import moment, { Moment } from 'moment';

export default class EventLogEntry {
  timestamp: Moment;
  device: string;
  description: string;

  constructor(timestamp: Date, device: string, description: string) {
    this.timestamp = moment(timestamp);
    this.device = device;
    this.description = description;
  }

  readableTimestamp() {
    return this.timestamp.format('dddd, MMMM Do YYYY');
  }
}
