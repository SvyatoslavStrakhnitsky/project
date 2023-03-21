import { FC, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import cls from './UserCard.module.css';
import { IUser } from '../../model/types/User';

interface UserCardProps {
    className?: string;
    data?: IUser;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const UserCard: FC<UserCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    const onKeyPressValidation = (e: KeyboardEvent) => {
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('ProfileCard error')}
                    text={t('Refresh page', { ns: 'translation' })}
                    textAlign={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar && <Avatar src={data.avatar} alt="" />}
                </div>
                <Input
                    className={cls.input}
                    value={data?.username}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    placeholder={t('Nick') || ''}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    onChange={onChangeAge}
                    onKeyPress={onKeyPressValidation}
                    readonly={readonly}
                    placeholder={t('Age') || ''}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    onChange={onChangeCity}
                    readonly={readonly}
                    placeholder={t('City') || ''}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    placeholder={t('Avatar') || ''}
                />
            </div>
        </div>
    );
};
