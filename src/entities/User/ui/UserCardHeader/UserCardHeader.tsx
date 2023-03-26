import { useProfileUpdateMutation } from '@/shared/api/rtkApi';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import { FC, useCallback } from 'react';
import { userActions } from '../../model/slice/userSlice';
import { IUser } from '../../model/types/User';
import AcceptIcon from '@/shared/assets/icons/accept.svg';
import CancelIcon from '@/shared/assets/icons/cancel.svg';
import EditIcon from '@/shared/assets/icons/edit.svg';
import cls from './UserCardHeader.module.css';

interface UserCardHeaderProps {
    readonly?: boolean;
    data?: IUser;
    className?: string;
    isError: boolean;
}

export const UserCardHeader: FC<UserCardHeaderProps> = (props) => {
    const {
        className,
        data,
        readonly = false,
        isError = false,
    } = props;

    const dispatch = useAppDispatch();

    const [editProfile] = useProfileUpdateMutation();

    const handleEditMode = useCallback(() => {
        dispatch(userActions.setReadonly(false));
    }, [dispatch]);

    const handleEditModeCancel = useCallback(() => {
        dispatch(userActions.cancelEdit());
    }, [dispatch]);

    const handleEdit = useCallback(async() => {
        if (data) {
            await editProfile(data);            
            dispatch(userActions.acceptUpdatingProfile()); 
        }        
    }, [data, editProfile, dispatch]);

    return (
        <HStack justify='end' gap={4} className={classNames(cls.userCardHeader, {}, [className])}>
            {
                readonly 
                    ?  <>
                        <Button 
                            theme='clear' className={cls.btn}
                            onClick={handleEditMode}
                        >
                            <Icon Svg={EditIcon} className={cls.edit}/>
                        </Button> 
                    </>

                    : <>
                        <Button 
                            theme='clear' className={cls.btn}
                            onClick={handleEdit}
                            disabled={isError}
                        >
                            <Icon Svg={AcceptIcon} className={cls.accept}/>
                        </Button>
                        <Button 
                            theme='clear' className={cls.btn}
                            onClick={handleEditModeCancel}
                        >
                            <Icon Svg={CancelIcon} className={cls.cancel}/>
                        </Button>
                    </>
            } 
        </HStack>
    );
};