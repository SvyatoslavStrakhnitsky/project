import { Article } from '../types/Article';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        setArticleDetailsData: (state, action: PayloadAction<Article | undefined>) => {
            state.data = action.payload;
        },
    }
});

export const {
    actions: articleDetailsActions,
    reducer: articleDetailsReducer
} = articleDetailsSlice;