import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.css';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.notFound)}>
            {t('Page not found')}
        </div>
    );
};