import {
    FC, memo, ReactNode, useCallback,
} from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Tabs.module.css';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = memo((props) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const onTabClickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => {
                const mods: Mods = {
                    [cls.normal]: tab.value === value,
                    [cls.outline]: tab.value !== value,
                };

                return  (
                    <div
                        key={tab.value}
                        onClick={onTabClickHandler(tab)}
                        className={classNames('', mods)}
                    >
                        {tab.content}
                    </div>
                );
            })}
        </div>
    ); 
});