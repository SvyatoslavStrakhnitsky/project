import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getLoginUsername = (state: StateSchema) => state.login?.username || '';