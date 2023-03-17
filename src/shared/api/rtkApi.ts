import { IUser } from '@/entities/User';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(TOKEN_STORAGE_KEY);

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },

    }),
    endpoints: (builder) => ({
        getMe: builder.query<IUser, void>({
            query: () => '/me'
        }),
    }),
});

export const {useGetMeQuery} = rtkApi;