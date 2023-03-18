import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const initialState: ArticlesPageSchema = {
};

const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState,
    reducers: {
        setArticlesPagePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setArticlesPageLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setArticlesPageHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
    }
});

export const {
    actions: articlesPageActions,
    reducer: articlesPageReducer
} = articlesPageSlice;