import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { routes } from '@/app/router';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
    <StoreProvider>
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </StoreProvider>
);
