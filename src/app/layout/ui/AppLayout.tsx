import { userActions } from '@/entities/User';
import { useGetMeQuery } from '@/shared/api/rtkApi';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { Header } from '@/widgets/Header';
import { MainContent } from '@/widgets/MainContent';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
export const AppLayout = () => {
    const dispatch = useAppDispatch();

    const token = localStorage.getItem(TOKEN_STORAGE_KEY) || '';

    const {data: user} = useGetMeQuery();

    useEffect(() => {
        if (token ) {
            dispatch(userActions.setAuthData(true));
        } 
        
        if (user) {
            dispatch(userActions.setUserData(user));
            dispatch(userActions.updateProfileData(user));
        }

    }, [dispatch, token, user]);
    
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
