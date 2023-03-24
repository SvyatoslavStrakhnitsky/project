import { AppLayout } from '@/app/layout';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ProtectedRoute } from '@/shared/lib/components/ProtectedRoute/ProtectedRoute';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

export const enum AppRoutes {
    PROFILE = '/profile/',
    ARTICLES = '/articles',
    ARTICLES_DETAILS = '/articles/',
    NOT_FOUND = '*'
}

const routeConfig: RouteObject[] = [
    {
        element: <AppLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: AppRoutes.PROFILE + ':id',
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
                errorElement:<ErrorBoundary />,
            },
            {
                path: AppRoutes.ARTICLES,
                element:(  
                    <ArticlesPage />
                ),
            },
            {
                path: AppRoutes.ARTICLES_DETAILS + ':id',
                element: <ArticleDetailsPage />
            },
            {
                path: AppRoutes.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
];

export const routes = createBrowserRouter(routeConfig);
