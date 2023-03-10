import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Button.module.css';

type ButtonTheme = 'clear' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme = 'primary', ...otherProps } = props;

    return (
        <button
            type={'button'}
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
