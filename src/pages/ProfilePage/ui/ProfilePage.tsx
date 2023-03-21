import { getUserData } from '@/entities/User';
import { Page } from '@/widgets/Page';
import { ProfileItem } from '@/widgets/ProfileItem';
import { UserItem } from '@/widgets/UserItem';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProfilePage: FC = () => {
    const {id} = useParams();

    const me = useSelector(getUserData);

    const isOwnProfile = id === me?.id;

    return (
        <Page>
            {
                isOwnProfile 
                    ? <ProfileItem />
                    : <UserItem />
            }
        </Page>
    );
};

export default ProfilePage;
