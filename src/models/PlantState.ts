import moment, { Moment } from 'moment';

export default class PlantState {
  id: number;
  startTime: Moment;
  plant1: string;
  plant2: string;
  plant3: string;
  plant4: string;

  constructor(id: number, startTime: Date, plantNames: string) {
    this.id = id;
    this.startTime = moment(startTime);
    this.plant1 = JSON.parse(plantNames)['plant1'];
    this.plant2 = JSON.parse(plantNames)['plant2'];
    this.plant3 = JSON.parse(plantNames)['plant3'];
    this.plant4 = JSON.parse(plantNames)['plant4'];
  }

  readableStartTime() {
    if (!this.startTime) return '';
    return this.startTime.format('dddd, MMMM Do YYYY');
  }

  update(key: string, value: any) {
    switch (key) {
      case 'startTime':
        this.startTime = value;
        break;
      case 'plant1':
        this.plant1 = value;
        break;
      case 'plant2':
        this.plant2 = value;
        break;
      case 'plant3':
        this.plant3 = value;
        break;
      case 'plant4':
        this.plant4 = value;
        break;
    }

    return this;
  }

  serializePlantNames(): string {
    return `{"plant1":"${this.plant1}","plant2":"${this.plant2}","plant3":"${this.plant3}","plant4":"${this.plant4}"}`;
  }

  static defaultPlantNames(): string {
    return '{"plant1":"Plant 1","plant2":"Plant 2","plant3":"Plant 3","plant4":"Plant 4"}';
  }
}
