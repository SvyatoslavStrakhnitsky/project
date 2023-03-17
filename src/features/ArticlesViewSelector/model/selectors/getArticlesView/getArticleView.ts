import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesView = (state: StateSchema) => state?.articlesView?.view || 'big'; 
