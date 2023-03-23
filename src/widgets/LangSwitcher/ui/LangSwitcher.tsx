import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import Ukraine from '@/shared/assets/icons/ukraine-flag.svg';
import USA from '@/shared/assets/icons/usa-flag.svg';
import cls from './LangSwitcher.module.css';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation();

    return (
        <div className={classNames(cls.langSwitcher, {}, [className])}>
            <Button
                onClick={() =>
                    i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk')
                }
                className={cls.btn}
                theme="clear"
            >
                {
                    i18n.language === 'uk' 
                        ? <Icon Svg={USA}/> 
                        : <Icon Svg={Ukraine}/>
                }
            </Button>
        </div>
    );
};
