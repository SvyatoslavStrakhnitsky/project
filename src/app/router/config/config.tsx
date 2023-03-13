import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { AppLayout } from '@/app/layout';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

const enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    NOT_FOUND = '*'
}

const routeConfig: RouteObject[] = [
    {
        element: <AppLayout />,
        errorElement:<ErrorBoundary />,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <MainPage />,
                errorElement:<ErrorBoundary />,
            },
            {
                path: AppRoutes.ABOUT,
                element: <AboutPage />,
            },
            {
                path: AppRoutes.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
];

export const routes = createBrowserRouter(routeConfig);
