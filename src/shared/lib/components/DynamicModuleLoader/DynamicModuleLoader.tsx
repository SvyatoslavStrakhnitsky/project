import { ReduxStoreWithManager, StateSchemaKey } from '@/shared/config/redux/types/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();


    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer] ) => {
            store.reducersManager.add(name as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });
    
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name] ) => {
                    store.reducersManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
    }, [dispatch, reducers, removeAfterUnmount, store.reducersManager]);

    return (
        <>
            {children}
        </>
    ); 
};