import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { FC, InputHTMLAttributes, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { HStack } from "../../Stack";
import cls from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    className?: string;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        label,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const {t} = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const localePlaceholder = placeholder ? t(placeholder) : '';

    return (
        <HStack 
            gap={8} 
            align={'center'} 
            className={classNames('', {}, [className])}
        >
            {label &&  <label>{t(label)}:</label>}
            <input 
                ref={inputRef}
                type="text" 
                placeholder={localePlaceholder} 
                className={classNames(cls.input, {}, [className])} 
                {...otherProps}
            />
        </HStack>
    );
};