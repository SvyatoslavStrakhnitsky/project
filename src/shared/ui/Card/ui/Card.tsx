import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Card.module.css';

export const enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={classNames(cls.card, {}, [className, cls[theme]])}
        >
            {children}
        </div>
    );
};
