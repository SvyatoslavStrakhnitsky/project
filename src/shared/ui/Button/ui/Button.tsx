import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './Button.module.css';

type ButtonTheme = 'clear' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme = 'primary', disabled, ...otherProps } = props;

    const mods: Mods = {
        [cls.disabled]: disabled
    };

    return (
        <button
            type={'button'}
            className={classNames(cls.button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
