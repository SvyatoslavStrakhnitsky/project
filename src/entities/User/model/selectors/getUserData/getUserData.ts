import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getUserData = (state: StateSchema) => state.user?.data;