import { InputValidations, useValidation } from '@/shared/lib/hooks/useValidation/useValidation';
import { ChangeEvent, useState } from 'react';

interface useInputOptions<T>  {
    validations?: InputValidations[];
    value: string | number;
    onChange?: (value: string) => void;
}

export const useInput = <T,>(options: useInputOptions<T>) => {
    const {
        value = '',
        validations,
        onChange,
    } = options;

    const [isDirty, setIsDirty] = useState(false);
    const error = useValidation( {
        value,
        validations
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlurHandler = () => {
        setIsDirty(true);
    };

    return {
        isDirty,
        error,
        onChangeHandler,
        onBlurHandler,
    };
};