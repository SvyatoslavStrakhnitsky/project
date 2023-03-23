import { FC, useState } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import DoubleArrowLeft from '@/shared/assets/icons/double-arrow-left.svg';
import DoubleArrowRight from '@/shared/assets/icons/double-arrow-right.svg';
import { Icon } from '@/shared/ui/Icon';
import cls from './Sidebar.module.css';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onSidebarToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
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
