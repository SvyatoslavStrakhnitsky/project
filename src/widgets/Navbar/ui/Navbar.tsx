import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import type{ FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { LoginModal } from '@/features/UserAuth';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

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
