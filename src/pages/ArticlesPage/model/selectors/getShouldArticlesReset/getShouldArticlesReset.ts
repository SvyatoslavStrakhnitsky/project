import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getShouldArticlesReset = (state: StateSchema) => 
    state?.articlesPage?.replace || false;
