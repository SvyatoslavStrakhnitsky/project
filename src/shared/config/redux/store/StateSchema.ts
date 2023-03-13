import { UserSchema } from '@/entities/User/model/types/UserSchema';
import { LoginSchema } from '@/features/UserAuth/model/types/LoginSchema';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    login: LoginSchema;
    user: UserSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

}