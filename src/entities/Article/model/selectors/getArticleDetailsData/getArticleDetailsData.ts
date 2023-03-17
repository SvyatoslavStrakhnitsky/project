import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getArticleDetailsData = (state: StateSchema) => state?.articleDetails?.data;