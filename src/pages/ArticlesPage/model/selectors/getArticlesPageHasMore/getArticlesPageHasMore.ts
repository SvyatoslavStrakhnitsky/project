import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticlesPageHasMore = (state: StateSchema) => state?.articlesPage?.hasMore || true;
