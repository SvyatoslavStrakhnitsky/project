import { StateSchema } from '@/shared/config/redux/store/StateSchema';

export const checkAuthData = (state: StateSchema) => state.user.isAuth;