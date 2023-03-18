import { userReducer } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';
import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducersManager } from './reducersManager';
import { StateSchema } from '../types/StateSchema';
import { scrollRestorationReducer } from '@/features/ScrollRestoration';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        scrollRestoration: scrollRestorationReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    };

    const reducersManager = createReducersManager(rootReducer);

    const store = configureStore({
        reducer: reducersManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkApi.middleware),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducersManager = reducersManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
