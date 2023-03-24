import { AppRoutes } from '@/app/router/config/config';
import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from '@/entities/User';
import ProfileIcon from '@/shared/assets/icons/profile-page.svg';
import ArticleIcon from '@/shared/assets/icons/articles-page.svg';
import { SidebarItemType } from '../types/sidebar';
import i18n from '@/shared/config/i18n/i18n';

export const getSidebarItems = createSelector(
    getUserData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: AppRoutes.ARTICLES,
                text: i18n.t('Articles'),
                Icon: ArticleIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.unshift(
                {
                    path: AppRoutes.PROFILE + userData.id,
                    text:  i18n.t('Profile'),
                    Icon: ProfileIcon,
                },
            );
        }

        return sidebarItemsList;
    },
);
