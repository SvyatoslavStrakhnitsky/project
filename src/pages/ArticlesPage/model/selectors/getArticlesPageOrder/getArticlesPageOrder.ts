import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPageOrder = (state: StateSchema) => state?.articlesPage?.order || 'asc';
