import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/Article';
import { SortOrder } from '@/shared/types';
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
        setArticlesPageSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setArticlesPageOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setArticlesPageType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setArticlesPageSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setShouldArticlesReset: (state, action: PayloadAction<boolean>) => {
            state.replace = action.payload;
        }
    }
});

export const {
    actions: articlesPageActions,
    reducer: articlesPageReducer
} = articlesPageSlice;