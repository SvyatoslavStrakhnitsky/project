import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import type { FC, ReactNode } from 'react';
import cls from './Flex.module.css';

type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'evenly' | 'around';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = 4 | 8 | 16 | 32;

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
    evenly: cls.justifyEvenly,
    around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32
};


export interface FlexProps {
    children: ReactNode;
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props) => {
    const {
        children,
        className,
        justify= 'start',
        align = 'start',
        direction = 'row',
        gap,
        max = false,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap]
    ];

    const mods: Mods = {
        [cls.max]: max
    };

    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
};