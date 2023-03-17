import { FC, lazy } from 'react';

export const ArticlesPageAsync: FC = lazy(() => import('./ArticlePage'));
