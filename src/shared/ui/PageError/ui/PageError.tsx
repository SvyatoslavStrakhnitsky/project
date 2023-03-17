import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC, ReactNode } from 'react';
import cls from './PageError.module.css';

interface PageProps {
    children: ReactNode;
    className?: string;
}

export const PageError: FC<PageProps> = (props) => {
    const {
        children,
        className
    } = props;

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            {children}
        </div>
    );
};