import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { AppLayout } from '@/app/layout';

const enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
}

const routeConfig: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <MainPage />,
            },
            {
                path: AppRoutes.ABOUT,
                element: <AboutPage />,
            },
        ],
    },
];

export const routes = createBrowserRouter(routeConfig);
