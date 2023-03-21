import { getUserData, UserCard } from '@/entities/User';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC } from 'react';
import { useSelector } from 'react-redux';

interface ProfileItemProps {
    className?: string;
}

export const ProfileItem: FC<ProfileItemProps> = (props) => {
    const {
        className
    } = props;

    const user = useSelector(getUserData);

    return (
        <div className={classNames('', {}, [className])}>
            <UserCard data={user} />
        </div>
    );
};