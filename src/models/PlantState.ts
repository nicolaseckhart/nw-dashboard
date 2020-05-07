import moment, { Moment } from 'moment';

export default class PlantState {
  plant1: string;
  plant2: string;
  plant3: string;
  plant4: string;
  private plantDate: Moment;

  constructor() {
    this.plant1 = 'Plant 1 Name';
    this.plant2 = 'Plant 2 Name';
    this.plant3 = 'Plant 3 Name';
    this.plant4 = 'Plant 4 Name';
    this.plantDate = moment('2019-11-25');
  }

  getPlantDate() {
    return this.plantDate.format("dddd, MMMM Do YYYY");
  }
}
