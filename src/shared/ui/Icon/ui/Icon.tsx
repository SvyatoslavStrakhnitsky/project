import { FC, FunctionComponent, SVGAttributes } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Icon.module.css';

interface IconProps {
    className?: string;
    Svg: FunctionComponent<SVGAttributes<SVGAElement>>;
}

export const Icon: FC<IconProps> = (props) => {
    const {
        Svg,
        className,
    } = props;

    return <Svg className={classNames(cls.icon, {}, [className])} />;
};
