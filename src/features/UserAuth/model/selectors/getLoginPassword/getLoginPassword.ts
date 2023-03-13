import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getLoginPassword = (state: StateSchema) => state.login?.password || '';