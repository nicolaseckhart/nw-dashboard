import GrowthProgram from './GrowthProgram';
import moment from 'moment';

describe('GrowthProgram', () => {
  describe('#getWeek', () => {
    it('returns seedling in the 1st week', () => {
      const plantDate = moment();
      expect(GrowthProgram.getWeek(plantDate)).toEqual('Week 1 - Seedling');
    });

    it('returns early bloom in the 5th week', () => {
      const plantDate = moment().subtract(5, 'weeks');
      expect(GrowthProgram.getWeek(plantDate)).toEqual('Week 6 - Early Bloom');
    });

    it('returns ripen in the 10th week', () => {
      const plantDate = moment().subtract(10, 'weeks');
      expect(GrowthProgram.getWeek(plantDate)).toEqual('Week 11 - Ripen');
    });

    it('returns finished in the 12th week', () => {
      const plantDate = moment().subtract(12, 'weeks');
      expect(GrowthProgram.getWeek(plantDate)).toEqual('Finished');
    });
  });

  describe('#getUpcomingWeek', () => {
    it('returns early growth in the 1st week', () => {
      const plantDate = moment();
      expect(GrowthProgram.getUpcomingWeek(plantDate)).toEqual('Week 2 - Early Growth');
    });

    it('returns mid bloom in the 5th week', () => {
      const plantDate = moment().subtract(5, 'weeks');
      expect(GrowthProgram.getUpcomingWeek(plantDate)).toEqual('Week 7 - Mid Bloom');
    });

    it('returns flush in the 10th week', () => {
      const plantDate = moment().subtract(10, 'weeks');
      expect(GrowthProgram.getUpcomingWeek(plantDate)).toEqual('Week 12 - Flush');
    });

    it('returns finished in the 11th week', () => {
      const plantDate = moment().subtract(11, 'weeks');
      expect(GrowthProgram.getUpcomingWeek(plantDate)).toEqual('Finished');
    });

    it('returns finished in the 12th week', () => {
      const plantDate = moment().subtract(12, 'weeks');
      expect(GrowthProgram.getUpcomingWeek(plantDate)).toEqual('Finished');
    });
  });
});
