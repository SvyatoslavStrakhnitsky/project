import { checkAuthData, getUserData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/UserAuth';
import { useLogoutMutation } from '@/features/UserAuth/api/authorizationApi';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const { t } = useTranslation();
    const {
        isOpen,
        onOpen,
        onClose,
    } = useModal();

    const dispatch = useAppDispatch();

    const isAuth = useSelector(checkAuthData);
    const user = useSelector(getUserData);

    const [logout, {isSuccess}] = useLogoutMutation();

    const handleLogout = async () => {
        await logout();
    };

    useEffect(() => {
        if (isSuccess) {            
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            dispatch(userActions.setAuthData(false));
            dispatch(userActions.setUserData(undefined));
        }
    }, [isSuccess, dispatch]);

    if (isAuth) {
        return    (
            <nav className={classNames('', {}, [className])}>
                <HStack gap={16}>
                    <Button theme={'clear'} onClick={handleLogout}>
                        {t('Log out')}
                    </Button>
                </HStack>
            </nav>
        );
    }

    return (
        <nav className={classNames('', {}, [className])}>
            <HStack gap={16}>
                <li>
                    <Button theme={'clear'} onClick={onOpen}>
                        {t('Sign in')}
                    </Button>
                </li>
            </HStack>
            <LoginModal 
                isOpen={isOpen}
                onClose={onClose}
            />
        </nav>
    );
};
