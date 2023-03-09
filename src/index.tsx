import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { routes } from '@/app/router';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </StrictMode>
);
