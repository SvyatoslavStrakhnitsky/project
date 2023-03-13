import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const checkAuthData = (state: StateSchema) => state.user.isAuth;