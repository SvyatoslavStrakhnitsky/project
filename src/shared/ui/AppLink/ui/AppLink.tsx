import { type FC, memo, type ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './AppLink.module.css';

type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to, 
        className,
        children, 
        theme = 'primary', 
        ...otherProps 
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.link, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

