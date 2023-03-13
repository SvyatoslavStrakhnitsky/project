import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(TOKEN_STORAGE_KEY);

            if (token) {
                headers.set('Authorization', token);
            }

            return headers;
        },

    }),
    endpoints: (builder) => ({
        login: builder.mutation<{token: string}, {username: string; password: string}>({
            query: (body) => ({
                url:'/login',
                method: 'POST',
                body
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url:'/logout',
                method: 'POST',
            }),
        }),
    }),

});

export const { useLoginMutation, useLogoutMutation } = rtkApi;