import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export type ValidationTypes = 'required' | 'minLength' |'maxLength' | 'max' | 'min';
export type ValidationError = {
    field: ValidationTypes;
    isError: boolean;
    message?: string;
}
export interface InputValidations {
    rule: ValidationTypes;
    pattern: string | number;
}

export type ValidationErrorsObj = Partial<Record<ValidationTypes, ValidationError>>

interface useValidationOptions {
    value: string | number;
    validations?: InputValidations[];
}

export const useValidation = ( options: useValidationOptions) => {
    const {
        value,
        validations = [],
    } = options;

    const {t} = useTranslation();
    const [errorsObj, setErrorsObj] = useState<ValidationErrorsObj>();
    const [errors, setErrors] = useState<ValidationError[]>([]);
    
    useEffect(() => {
        for (const {rule, pattern} of validations) {          
            switch (rule) {
                case 'required':                  
                    value 
                        ? setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: false, 
                                message: undefined
                            }
                        })) 
                        : setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: true, 
                                message: t('IsEmpty Error') || 'Error'
                            }
                        }));       
                    break;
                case 'minLength':         
                    String(value).length >= pattern
                        ? setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: false, 
                                message: undefined
                            }
                        })) 
                        : setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: true, 
                                message: t('MinLength', {
                                    int: pattern
                                })   || 'Error'
                            }
                        }));                          
                    break;  
                case 'maxLength': 
                    String(value).length <= pattern
                        ? setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: false, 
                                message: undefined
                            }
                        })) 
                        : setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: true, 
                                message: t('MaxLength', {
                                    int: pattern
                                })   || 'Error'
                            }
                        }));                          
                    break;  
                case 'min':
                    Number(value) > pattern
                        ? setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: false, 
                                message: undefined
                            }
                        })) 
                        : setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: true, 
                                message: t('Max', {
                                    int: pattern
                                })   || 'Error'
                            }
                        }));    
                    break;

                case 'max':
                    Number(value) < pattern
                        ? setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: false, 
                                message: undefined
                            }
                        })) 
                        : setErrorsObj(prev => ({
                            ...prev,
                            [rule]: {
                                field: rule,
                                isError: true, 
                                message: t('Max', {
                                    int: pattern
                                })   || 'Error'
                            }
                        }));    
                    break;
            }
        }
    }, [validations, value, t]);

    useEffect(() => {      
        for (const error in errorsObj) {
            switch (errorsObj[error as keyof typeof errorsObj]?.isError) {
                case true:
                    setErrors(prev => prev.find(err => err.field === error) 
                        ? [...prev] 
                        //@ts-ignore
                        : [errorsObj[error], ...prev]);
                    break;
                case false:
                    setErrors(prev => prev.filter(err => err.field !== error));
                    break;
            }
        }
    }, [errorsObj]);

    return errors?.[0] || {isError: false};
};