import moment, { Moment } from 'moment';

const transformWeekDifferenceBy = (transformation: number) => (difference: number) => difference + transformation;
const weeks = [
  'Week 1 - Seedling',
  'Week 2 - Early Growth',
  'Week 3 - Late Growth',
  'Week 4 - Transition',
  'Week 5 - Early Bloom',
  'Week 6 - Early Bloom',
  'Week 7 - Mid Bloom',
  'Week 8 - Mid Bloom',
  'Week 9 - Mid Bloom',
  'Week 10 - Late Bloom',
  'Week 11 - Ripen',
  'Week 12 - Flush',
];

export default class GrowthProgram {
  static getWeek = (plantDate: Moment) => GrowthProgram.findWeek(plantDate, transformWeekDifferenceBy(0));
  static getUpcomingWeek = (plantDate: Moment) => GrowthProgram.findWeek(plantDate, transformWeekDifferenceBy(1));

  private static findWeek = (plantDate: Moment, transformDifference: (n: number) => number) => {
    const transformedWeekDifference = transformDifference(moment().diff(plantDate, 'weeks'));
    if (transformedWeekDifference >= weeks.length) return 'Finished';
    return weeks[transformedWeekDifference];
  };
}
