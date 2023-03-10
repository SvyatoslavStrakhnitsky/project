import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import cls from './MainContent.module.css';

export const MainContent = () => {
    return (
        <main className={classNames(cls.main)}>    
            <Suspense fallback={<Loader className={cls.pageLoader}/>}>
                <Outlet />
            </Suspense>
        </main>
    );
};
