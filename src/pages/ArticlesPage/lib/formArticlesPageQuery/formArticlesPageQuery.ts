import { ArticleType } from '@/entities/Article/model/types/Article';
import { ARTICLES_QUERY_PARAMS } from '@/shared/const/articles';


export const formArticlesPageQuery = (params: URLSearchParams) => {
    let query = '?';    
    Array.from(params.entries()).forEach(([name, value]) => {
        if (name === ARTICLES_QUERY_PARAMS.typeParam && value === ArticleType.ALL) {
            value = '';
        }
        query += `${name}=${value}&`;
    });

    return query;
};