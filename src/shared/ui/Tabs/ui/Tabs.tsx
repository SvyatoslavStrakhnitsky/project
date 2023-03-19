import {
    FC, memo, ReactNode, useCallback,
} from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
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
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    theme={tab.value === value
                        ? CardTheme.NORMAL
                        : CardTheme.OUTLINE}
                    onClick={onTabClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
