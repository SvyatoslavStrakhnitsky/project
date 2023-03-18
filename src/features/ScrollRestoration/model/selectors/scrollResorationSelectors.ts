import { StateSchema } from '@/shared/config/redux/types/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getPageScroll = (state: StateSchema) => state.scrollRestoration.scroll;
export const getPageScrollByPath = createSelector(
    getPageScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
