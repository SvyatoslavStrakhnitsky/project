import { ArticleType } from '@/entities/Article/model/types/Article';
import { ARTICLES_QUERY_PARAMS } from '@/shared/const/articles';

interface FormArticlesPageQueryParams {
    page: number;
    limit: number;
    search: string;
    type: string;
    sort: string;
    order: string;
}


export const formArticlesPageQuery = (params: FormArticlesPageQueryParams) => {
    let query = '?';    
    Object.entries(params).forEach(([name, value]) => {
        if (name === ARTICLES_QUERY_PARAMS.typeParam && value === ArticleType.ALL) {
            value = '';
        }
        query += `${name}=${value}&`;
    });

    return query;
};