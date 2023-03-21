import { IUser } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

export const userApi = rtkApi
    .injectEndpoints({
        endpoints: (builder) => ({
            userById: builder.query<IUser, string>({
                query: (id) => `/users/${id}`,
            }),
        }),
        overrideExisting: false,
    });

export const { useUserByIdQuery } = userApi;