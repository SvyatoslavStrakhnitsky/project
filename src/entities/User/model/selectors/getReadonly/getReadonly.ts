import { StateSchema } from '@/shared/config/redux/types/StateSchema';

export const getReadonly = (state: StateSchema) => state.user?.readonly;