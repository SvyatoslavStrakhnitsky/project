import { UserSchema } from '@/entities/User/model/types/UserSchema';
import { LoginSchema } from '@/features/UserAuth/model/types/LoginSchema';
import { rtkApi } from '@/shared/api/rtkApi';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer, 
    ReducersMapObject
} from '@reduxjs/toolkit';

export interface StateSchema {
    user: UserSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducersManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducersManager: ReducersManager;
}