import { AppRoutes } from '@/app/router/config/config';
import { checkAuthData } from '@/entities/User';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import {
    Navigate,
} from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const isAuth = useSelector(checkAuthData);

    if (!isAuth) {
        return <Navigate to={AppRoutes.ARTICLES} replace />;
    }

    return (
        <>
            {children}
        </>
    );
};