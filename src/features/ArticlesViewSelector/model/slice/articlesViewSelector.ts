import { ARTICLES_VIEW_STORAGE_KEY } from '@/shared/const/localStorage';
import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesViewSchema } from '../types/ArticlesViewSchema';

const initialState: ArticlesViewSchema = {
    view: (localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleViewType) || 'big'
};

const articlesPageSlice = createSlice({
    name: 'articlesViewSelector',
    initialState,
    reducers: {
        setArticlesView: (state, action: PayloadAction<ArticleViewType>) => {
            state.view = action.payload;
        },
    }
});

export const {
    actions: articlesViewSelectorActions,
    reducer: articlesViewSelectorReducer
} = articlesPageSlice;