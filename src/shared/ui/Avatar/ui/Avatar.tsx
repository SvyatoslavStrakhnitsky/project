import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Avatar.module.css';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppImage } from '@/shared/ui/AppImage';
import { Icon } from '@/shared/ui/Icon';
import UserIcon from '@/shared/assets/icons/user.svg';

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

    const fallback = (<Skeleton 
        {...styles} 
        border={'50%'}
    />);

    const errorFallback = <Icon Svg={UserIcon}/>;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
