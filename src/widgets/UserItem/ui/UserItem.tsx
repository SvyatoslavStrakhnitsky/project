import { UserCard } from '@/entities/User';
import { useUserByIdQuery } from '@/entities/User/api/userApi';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface UserItemProps {
    className?: string;
}

export const UserItem: FC<UserItemProps> = (props) => {
    const {
        className
    } = props;

    const {id} = useParams();

    const {data: user, isLoading} = useUserByIdQuery(id as string);

    return (
        <div className={classNames('', {}, [className])}>
            <UserCard data={user} isLoading={isLoading}/>
        </div>
    );
};