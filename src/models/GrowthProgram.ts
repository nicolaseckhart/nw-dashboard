import moment, { Moment } from 'moment';

const transformWeekDifferenceBy = (transformation: number) => (difference: number) => difference + transformation;
const weeks = [
  'Seedling',
  'Early Growth',
  'Late Growth',
  'Transition',
  'Early Bloom',
  'Early Bloom',
  'Mid Bloom',
  'Mid Bloom',
  'Mid Bloom',
  'Late Bloom',
  'Ripen',
  'Flush',
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
