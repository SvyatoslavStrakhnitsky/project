import { ArticleType } from '@/entities/Article/model/types/Article';
import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPageType = (state: StateSchema) => 
    state?.articlesPage?.type || ArticleType.ALL;
