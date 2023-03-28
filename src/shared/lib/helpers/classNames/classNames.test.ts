import { classNames, Mods } from './classNames';

describe('classNames', () => {
    const mods: Mods = {
        ['first-mod-class']: true,
        ['second-mod-class']: undefined,
    };

    const extras = ['first extra', undefined, 'second-extra'];

    it('with only the first param', () => {
        expect(classNames('first-class')).toBe('first-class');
    });

    it('with the first and the second params', () => {
        expect(classNames('first-class', mods))
            .toBe('first-class first-mod-class');
    });

    it('with all params', () => {
        expect(classNames('first-class', mods, extras))
            .toBe('first-class first extra second-extra first-mod-class');
    });
});