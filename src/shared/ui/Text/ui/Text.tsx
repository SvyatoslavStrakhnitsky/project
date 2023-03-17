import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Text.module.css';

export const enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export const enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export const enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string | null;
    text?: string | null;
    theme?: TextTheme;
    textAlign?: TextAlign;
    size?: TextSize;
}

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        textAlign = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames('', {}, [
            className, cls[theme],
            cls[textAlign],
            cls[size]])}
        >
            {title && (
                <p className={cls.title}>
                    {title}
                </p>
            )}
            {text && (
                <p className={cls.text}>
                    {text}
                </p>
            ) }
        </div>
    );
});
