import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input/ui/Input";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import cls from './LoginForm.module.css';

interface LoginFormProps {
    className?: string;
    onClose?: () => void;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        onClose,
        className
    } = props;
    const {t} = useTranslation();

    return (
        <form className={classNames(cls.form, {}, [className])}>
            <Input placeholder={'Name'} autoFocus/>
            <Input 
                placeholder={'Password'} 
                type="password" 
            />
            <Button 
                className={cls.loginBtn} onClick={onClose}>
                {t("Sign in")}
            </Button>
        </form>
    );
};