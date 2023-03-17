import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { FunctionComponent, SVGAttributes } from 'react';
import cls from './ViewSelector.module.css';

export interface ViewTypes<T> {
    view: T;
    icon: FunctionComponent<SVGAttributes<SVGAElement>>;
}

interface ViewSelectorProps<T> {
    view: T;
    viewTypes: ViewTypes<T>[];
    onViewClick: (view: T) => void;
    className?: string;
}

export const ViewSelector = <T,>(props: ViewSelectorProps<T>) => {
    const {
        view,
        viewTypes,
        className,
        onViewClick
    } = props;

    const onClick = (newView: T) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(cls.viewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    key={index}
                    theme={'clear'}
                    onClick={onClick(viewType.view)}
                    className={cls.btn}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.selected]: viewType.view === view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
};