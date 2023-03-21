import { IUser } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

interface LoginRequest {
    username: string; 
    password: string;
}

interface LoginResponse {
    token: string;
    user: IUser;
}

const authorizedApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url:'/login',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url:'/logout',
                method: 'POST',
                credentials: 'include',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useLoginMutation, useLogoutMutation } = authorizedApi;