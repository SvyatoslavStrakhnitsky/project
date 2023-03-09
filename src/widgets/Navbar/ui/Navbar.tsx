import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.css';

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.navbar)}>
            <ul>
                <li>
                    <AppLink to="/">{t('Main')}</AppLink>
                </li>
                <li>
                    <AppLink to="/about">{t('About')}</AppLink>
                </li>
            </ul>
        </nav>
    );
};
