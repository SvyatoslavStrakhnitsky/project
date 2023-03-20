import { ArticleType, ArticleSortField } from '@/entities/Article/model/types/Article';
import { rtkApi } from '@/shared/api/rtkApi';
import { SortOrder } from '@/shared/types';
import { Article } from '../model/types/Article';

interface ArticlesResponse {
    articles: Article[];
    pagination: {
        nextPage: number | null;
        isNextPageExists: boolean;
    };
}

interface ArticlesRequest {
    page: number; 
    limit: number; 
    search: string; 
    type: ArticleType; 
    sort: ArticleSortField; 
    order: SortOrder;
    replace: boolean;
}

export const articleApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        articles: builder.query<ArticlesResponse, ArticlesRequest>({
            query: (params) =>{
                const {
                    replace, 
                    ...rest
                } = params;
                
                return {
                    url: '/articles',
                    params: {
                        ...rest,
                        type:  rest.type !== ArticleType.ALL ? rest.type : '',
                    }
                }; 
            },
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