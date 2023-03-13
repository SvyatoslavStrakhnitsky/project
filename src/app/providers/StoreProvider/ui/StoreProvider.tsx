import { StateSchema } from '@/shared/config/redux/store/StateSchema';
import { createReduxStore } from '@/shared/config/redux/store/store';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState
    } = props;


    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};