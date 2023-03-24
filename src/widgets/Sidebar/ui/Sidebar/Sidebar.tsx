import { FC, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import DoubleArrowLeft from '@/shared/assets/icons/double-arrow-left.svg';
import DoubleArrowRight from '@/shared/assets/icons/double-arrow-right.svg';
import { Icon } from '@/shared/ui/Icon';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(() => (sidebarItemsList.map((item) => (
        <li key={item.path}>
            <SidebarItem
                item={item}
                collapsed={collapsed}
            />
        </li>
    ))), [collapsed, sidebarItemsList]);

    const onSidebarToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        > 
            <nav>
                <ul className={cls.items}>
                    {itemsList}
                </ul>
            </nav>

            <Button
                className={cls.btnCollapse}
                onClick={onSidebarToggle}
                theme={'clear'}
            >
                {collapsed 
                    ? <Icon Svg={DoubleArrowRight}/>  
                    : <Icon Svg={DoubleArrowLeft}/>
                }
            </Button>
        </div>
    );
};
