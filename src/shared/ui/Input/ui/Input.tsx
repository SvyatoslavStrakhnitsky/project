import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useInput } from '@/shared/lib/hooks/useInput/useInput';
import { InputValidations } from '@/shared/lib/hooks/useValidation/useValidation';
import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from '../../Stack';
import cls from './Input.module.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    label?: string;
    value?: string | number;
    placeholder?: string;
    className?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    validations?: InputValidations[];
    onErrorHandler?: (value: boolean) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        label,
        placeholder,
        autoFocus,
        value = '',
        readonly,
        validations,
        onErrorHandler,
        onChange,
        ...otherProps
    } = props;

    const {t} = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const {
        error, 
        isDirty,
        onChangeHandler,
        onBlurHandler
    } = useInput({
        value,
        onChange,
        validations
    });

    useEffect(() => {
        onErrorHandler?.(error.isError);
    }, [error.isError, onErrorHandler]);

    const mods: Mods = {
        [cls.showError]: error?.isError && isDirty,
    };

    const localePlaceholder = placeholder ? t(placeholder) : '';

    return (
        <HStack 
            gap={8} 
            align={'center'} 
            className={classNames('', {}, [className])}
        >
            {label &&  <label>{t(label)}:</label>}
            <div className={cls.inputWrapper}>
                <span className={classNames(cls.error, mods)}>
                    {error?.message}
                </span>
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder={localePlaceholder} 
                    className={classNames(cls.input, {}, [className])} 
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    readOnly={readonly}
                    {...otherProps}
                />           
            </div>
        </HStack>
    );
});