import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '../model/types/Article';

interface ArticlesResponse {
    articles: Article[];
    pagination: {
        nextPage: number | null;
        isNextPageExists: boolean;
    };
}

interface ArticlesRequest {
    query: string;
    replace: boolean;
}

export const articleApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        articles: builder.query<ArticlesResponse, ArticlesRequest>({
            query: ({query}) => `/articles${query}`,
            transformResponse: ({articles, pagination}: ArticlesResponse) => ({
                articles,
                pagination,
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems, {arg: {replace}}) => {
                if (replace) {
                    currentCache.articles = newItems.articles;
                    currentCache.pagination = newItems.pagination;
                } else {                    
                    currentCache.articles.push(...newItems.articles);
                    currentCache.pagination = newItems.pagination;
                }
            },
            forceRefetch({ currentArg, previousArg }) {                
                return currentArg?.query !== previousArg?.query;
            },
        }),
        articleById: builder.query<Article, {id: string}>({
            query: ({id}) => `/articles/${id}`
        }),
    }),
    overrideExisting: false,
});

export const { useArticleByIdQuery, useArticlesQuery } = articleApi;