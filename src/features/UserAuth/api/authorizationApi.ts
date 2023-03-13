import { rtkApi } from '@/shared/api/rtkApi';

const authorizedApi = rtkApi.injectEndpoints({
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
    overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation } = authorizedApi;