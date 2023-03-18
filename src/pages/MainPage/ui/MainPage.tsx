import { Page } from '@/widgets/Page';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation();

    return <Page>{t('Main')}</Page>;
};

export default MainPage;
