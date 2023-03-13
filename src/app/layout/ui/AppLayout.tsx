import { userActions } from '@/entities/User';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { Header } from '@/widgets/Header';
import { MainContent } from '@/widgets/MainContent';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';

export const AppLayout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_STORAGE_KEY);

        if (token) {
            dispatch(userActions.setAuthData(true));
        }
    }, [dispatch]);
    
    return (
        <Suspense fallback="">
            <Header />
            <HStack>
                <Sidebar />
                <MainContent />
            </HStack>
        </Suspense>
    );
};
