import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import type{ FC } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames('', {}, [className])}>
            <HStack gap={16}>
                <li>
                    <AppLink to="/">{t('Main')}</AppLink>
                </li>
                <li>
                    <AppLink to="/about">{t('About')}</AppLink>
                </li>
            </HStack>
        </nav>
    );
};
