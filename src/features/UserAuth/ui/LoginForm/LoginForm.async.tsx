import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync: FC<LoginFormProps> = lazy(() => import('./LoginForm'));
