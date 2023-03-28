import { formatDate } from '@/shared/lib/helpers/formatDate/formatDate';

describe('formatDate', () => {
    const nowDate = '2018-5-28';

    it('without params', () => {
        expect(formatDate()).toBe(undefined);
    });

    it('without first param', () => {
        expect(formatDate(nowDate)).toBe('28/4/2018');
    });
});