import { getEditUserData, getReadonly, userActions, UserCard } from '@/entities/User';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

interface ProfileItemProps {
    className?: string;
}

export const ProfileItem: FC<ProfileItemProps> = (props) => {
    const {
        className
    } = props;

    const dispatch = useAppDispatch();
    const user = useSelector(getEditUserData);
    const readonly = useSelector(getReadonly);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(userActions.updateProfileData({username: value || ''}));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(userActions.updateProfileData({age: Number(value || '')}));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(userActions.updateProfileData({city: value || ''}));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(userActions.updateProfileData({city: value || ''}));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <UserCard 
                data={user} 
                readonly={readonly}
                onChangeUsername={onChangeUsername}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                canEdit
            />
        </div>
    );
};