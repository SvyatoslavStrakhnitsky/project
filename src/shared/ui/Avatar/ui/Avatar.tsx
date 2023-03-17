import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Avatar.module.css';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
