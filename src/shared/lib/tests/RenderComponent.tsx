import { StoreProvider } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/shared/config/redux/types/StateSchema';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface RenderComponentOptions {
    route?: string;
    initialState?: StateSchema;
}

export const RenderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <MemoryRouter basename={route}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    ); 
};