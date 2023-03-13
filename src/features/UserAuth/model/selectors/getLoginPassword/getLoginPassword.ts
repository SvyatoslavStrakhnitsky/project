import { StateSchema } from '@/shared/config/redux/store/StateSchema';

export const getLoginPassword = (state: StateSchema) => state.login.password;