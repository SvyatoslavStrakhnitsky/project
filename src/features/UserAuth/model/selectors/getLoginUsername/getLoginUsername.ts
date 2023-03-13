import { StateSchema } from '@/shared/config/redux/store/StateSchema';

export const getLoginUsername = (state: StateSchema) => state.login.username;