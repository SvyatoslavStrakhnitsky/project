import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/UserAuth';
import { rtkApi } from '@/shared/api/rtkApi';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => 
    configureStore<StateSchema>({
        reducer: {
            login: loginReducer,
            user: userReducer,
            [rtkApi.reducerPath]: rtkApi.reducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware)
    });

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']