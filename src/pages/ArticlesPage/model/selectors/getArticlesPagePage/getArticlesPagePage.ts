import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPagePage = (state: StateSchema) => state?.articlesPage?.page || 1;
