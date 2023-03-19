import { ArticleSortField } from '@/entities/Article/model/types/Article';
import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPageSort = (state: StateSchema) => 
    state?.articlesPage?.sort || ArticleSortField.CREATED_AT;
