import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import{ FC, useEffect } from 'react';
import { Button } from '@/shared/ui/Button';
import { LoginModal } from '@/features/UserAuth';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useSelector } from 'react-redux';
import { checkAuthData, userActions } from '@/entities/User';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLogoutMutation } from '@/features/UserAuth/api/authorizationApi';

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

    const [logout, {isSuccess}] = useLogoutMutation();

    const handleLogout = async () => {
        await logout();
    };

    useEffect(() => {
        if (isSuccess) {            
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            dispatch(userActions.setAuthData(false));
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
                    <AppLink to="/">{t('Main')}</AppLink>
                </li>
                <li>
                    <AppLink to="/about">{t('About')}</AppLink>
                </li>
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
