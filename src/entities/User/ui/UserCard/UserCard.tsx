import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { InputValidations } from '@/shared/lib/hooks/useValidation/useValidation';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { FC, KeyboardEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../model/types/User';
import { UserCardHeader } from '../UserCardHeader/UserCardHeader';
import cls from './UserCard.module.css';

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
    canEdit?: boolean;
}

const usernameValidation: InputValidations[] = [
    { 
        rule: 'minLength',
        pattern: 4
    },
    { 
        rule: 'maxLength',
        pattern: 12
    }
];

const ageValidation: InputValidations[] = [
    { 
        rule: 'min',
        pattern: 1
    },
    { 
        rule: 'max',
        pattern: 99
    }
];

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
        canEdit = false,
    } = props;

    const { t } = useTranslation();
    const [isError, setIsError] = useState(false);

    const mods: Mods = {
        [cls.isEdit]: !readonly
    };

    const onKeyPressValidation = useCallback((e: KeyboardEvent) => {
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    }, []);

    const onErrorHandler = useCallback((isError: boolean) => {
        setIsError(isError);
    }, []);

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
                    text={t('Refresh page')}
                    textAlign={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.userCard, mods, [className])}>
            {canEdit && <UserCardHeader 
                data={data}
                readonly={readonly}
                isError={isError}
            />}
            <HStack justify='center'>
                {data?.avatar && (
                    <div className={cls.avatar}>
                        <Avatar src={data.avatar} alt="" />
                    </div>
                )}
            </HStack>
            <Input
                className={cls.input}
                value={data?.username}
                onChange={onChangeUsername}
                readonly={readonly}
                placeholder={'Username'}
                autoFocus={!readonly}
                validations={usernameValidation}
                onErrorHandler={onErrorHandler}
            />
            <Input
                className={cls.input}
                value={data?.age || ''}
                onChange={onChangeAge}
                onKeyPress={onKeyPressValidation}
                readonly={readonly}
                placeholder={'Age'}
                validations={ageValidation}
                onErrorHandler={onErrorHandler}
            />
            <Input
                className={cls.input}
                value={data?.city}
                onChange={onChangeCity}
                readonly={readonly}
                placeholder={'City'}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                onChange={onChangeAvatar}
                readonly={readonly}
                placeholder={'Avatar'}
            />
        </div>
    );
};
