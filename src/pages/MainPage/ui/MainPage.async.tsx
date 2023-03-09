import { FC, lazy } from 'react';

export const MainPageAsync: FC = lazy(() => import('./MainPage'));
