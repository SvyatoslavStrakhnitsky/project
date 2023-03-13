import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC } from 'react';
import cls from './Text.module.css';

type TextTheme = 'primary' | 'error';

interface TextProps {
    className?: string;
    text?: string | null;
    title?: string | null;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        text,
        title,
        theme = 'primary'
    } = props;
    return (
        <div className={classNames('', {}, [cls[theme], className])}>
            {text && <p className={classNames(cls.text)}>{text}</p> }
            {title && <p className={classNames(cls.title)}>{title}</p> }
        </div>
    );
};