export type Mods = Record<string, boolean | undefined>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = []
) =>
    [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([cls]) => cls),
    ].join(' ');
