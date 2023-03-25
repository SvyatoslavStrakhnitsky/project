import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getEditUserData = (state: StateSchema) => state.user?.editData;