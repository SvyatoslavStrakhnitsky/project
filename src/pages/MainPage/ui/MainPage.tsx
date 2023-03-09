import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation();

    return <div>{t('About')}</div>;
};

export default MainPage;
