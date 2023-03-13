import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.css';

export const ErrorPage = () => {
    const {t} = useTranslation();

    const onPageReload = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.errorPage)}>
            <p className={classNames(cls.errorText)}>{t('Unexpected error')}</p>
            <Button onClick={onPageReload}>{t('Reload page')}</Button>
        </div>
    );
};