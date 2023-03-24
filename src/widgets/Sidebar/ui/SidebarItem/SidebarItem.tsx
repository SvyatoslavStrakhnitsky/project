import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.css';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation();

    const {
        path,
        text,
        Icon,
    } = item;


    return (
        <NavLink
            to={path}
            className={({isActive}) => 
                classNames(cls.item, {
                    [cls.collapsed]: collapsed,
                    [cls.active]: isActive 
                })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(text)}
            </span>

        </NavLink>
    );
});
