import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Loader.module.css';

interface LoaderProps  {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};