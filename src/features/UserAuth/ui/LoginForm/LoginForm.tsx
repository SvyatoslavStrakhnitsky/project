import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/ui/Input';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import {Text} from '@/shared/ui/Text';
import cls from './LoginForm.module.css';
import { userActions } from '@/entities/User';
import { TOKEN_STORAGE_KEY } from '@/shared/const/localStorage';
import {
    DynamicModuleLoader, ReducersList 
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useLoginMutation } from '../../api/authorizationApi';

export interface LoginFormProps {
    className?: string;
    onClose?: () => void;
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        onClose,
        className
    } = props;

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);

    const [login, 
        {
            isError,
            isLoading,
            isSuccess, 
            data
        }
    ] = useLoginMutation();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLogin = async () => {
        await login({username, password});
    };

    useEffect(() => {
        if (isSuccess && data?.token) {
            dispatch(loginActions.setUsername(''));
            dispatch(loginActions.setPassword(''));
            dispatch(userActions.setAuthData(true));
            localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
            onClose?.();
        } 
    }, [isSuccess, onClose, dispatch, data]);
    
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form className={classNames(cls.form, {}, [className])}>
                <Text title={t('Login form')}/>
                {isError && <Text text={t('Error')} theme={'error'}/>}
                <Input placeholder={'Name'} 
                    value={username}
                    onChange={onChangeUsername} 
                />
                <Input 
                    placeholder={'Password'} 
                    type="password" 
                    value={password}
                    onChange={onChangePassword}
                />
                <Button 
                    className={cls.loginBtn} 
                    onClick={handleLogin} 
                    disabled={isLoading}>
                    {t('Sign in')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
};

export default LoginForm;