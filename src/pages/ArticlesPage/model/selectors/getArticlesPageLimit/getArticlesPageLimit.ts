import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPageLimit = (state: StateSchema) => state?.articlesPage?.limit || 5;
