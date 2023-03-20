import { AppLayout } from '@/app/layout';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProtectedRoute } from '@/shared/lib/components/ProtectedRoute/ProtectedRoute';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

export const enum AppRoutes {
    PROFILE = '/profile/:id',
    ARTICLES = '/articles',
    ARTICLES_DETAILS = '/articles/:id',
    NOT_FOUND = '*'
}

const routeConfig: RouteObject[] = [
    {
        element: <AppLayout />,
        errorElement:<ErrorBoundary />,
        children: [
            {
                path: AppRoutes.PROFILE,
                element: <MainPage />,
                errorElement:<ErrorBoundary />,

            },
            {
                path: AppRoutes.ARTICLES,
                element:(  
                    <ProtectedRoute>
                        <ArticlesPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: AppRoutes.ARTICLES_DETAILS,
                element:(  
                    <ProtectedRoute>
                        <ArticleDetailsPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: AppRoutes.NOT_FOUND,
                element: <NotFoundPage />,
            },
        ],
    },
];

export const routes = createBrowserRouter(routeConfig);
