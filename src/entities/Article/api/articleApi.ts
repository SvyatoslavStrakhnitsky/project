import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '../model/types/Article';

interface ArticlesResponse {
    articles: Article[];
    pagination: {
        nextPage: number | null;
        isNextPageExists: boolean;
    };
}

export const articleApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        articles: builder.query<ArticlesResponse, string>({
            query: (params = '') => `/articles${params}`,
            transformResponse: ({articles, pagination}: ArticlesResponse) => ({
                articles,
                pagination,
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.articles.push(...newItems.articles);
                currentCache.pagination = newItems.pagination;

            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
        articleById: builder.query<Article, {id: string}>({
            query: ({id}) => `/articles/${id}`
        }),
    }),
    overrideExisting: false,
});

export const { useArticleByIdQuery, useArticlesQuery } = articleApi;