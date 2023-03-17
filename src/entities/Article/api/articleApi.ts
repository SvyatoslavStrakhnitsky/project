import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '../model/types/Article';

export const articleApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        articleById: builder.query<Article, {id: string}>({
            query: ({id}) => `/articles/${id}`
        }),
    }),
    overrideExisting: false,
});

export const { useArticleByIdQuery } = articleApi;