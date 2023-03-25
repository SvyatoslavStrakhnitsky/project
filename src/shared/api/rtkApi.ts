import { IUser, userActions } from '@/entities/User';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { 
    BaseQueryFn,
    createApi,
    FetchArgs, 
    fetchBaseQuery, 
    FetchBaseQueryError 
} from '@reduxjs/toolkit/query/react';

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =  fetchBaseQuery({
    baseUrl: __API__,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(TOKEN_STORAGE_KEY);

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions)  => {
        const result = await baseQuery(args, api, extraOptions);

        if (result?.error?.status == 401) {
            const refresh: any =  await baseQuery({
                url: '/refresh',  credentials: 'include'
            }, api, extraOptions );

            if (refresh?.data?.token) {
                localStorage.setItem(TOKEN_STORAGE_KEY, refresh.data.token);
                await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch(userActions.setAuthData(false));
            }
        }

        return result;
    },
    endpoints: (builder) => ({
        getMe: builder.query<IUser, void>({
            query: () => '/me'
        }),
        profileUpdate: builder.mutation<IUser, IUser>({
            query: (body) =>({
                url: '/profile/update',
                body,
                method: 'PUT',
            })
        }),
    }),
});

export const {useGetMeQuery, useProfileUpdateMutation} = rtkApi;