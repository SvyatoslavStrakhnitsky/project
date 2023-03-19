import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPageSearch = (state: StateSchema) => state?.articlesPage?.search ?? '';
