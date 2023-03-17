import { CSSProperties, FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Skeleton.module.css';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        width,
        height,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.skeleton, {}, [className])}
            style={styles}
        />
    );
};
