import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useOutsideClick } from '@/shared/lib/hooks/useOutsideClick/useOutsideClick';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.css';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string | null;
    options?: SelectOption<T>[];
    value?: T;
    readonly?: boolean;
    translation?: Record<string, string>;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        translation,
        onChange,
    } = props;

    const {t} = useTranslation();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        if (translation) {
            setSelectedValue(t(translation[value as keyof typeof translation]) || '');
        }
    }, [t, value, translation]);
    

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.open]: open
    };

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);

    const ref = useOutsideClick(handleClose);

    const onChangeHandler = useCallback((e: MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLElement;
        onChange?.(element?.dataset.value as T) ;  
        setSelectedValue(element?.innerText as T);   
        handleClose();
    }, [handleClose, onChange]);
    

    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <li key={value} className={cls.item}>
            <span className={cls.content} data-value={value}>
                {content}
            </span> 
        </li>

    )), [ options]);


    return (
        <div className={classNames('', mods, [className])} ref={ref}>
            {label
                ? <strong className={cls.label}>
                    {`${label}:`}
                </strong>
                : null
            }
            <div className={cls.select}>
                <button className={cls.button} onClick={handleOpen}>
                    {selectedValue || value}
                </button>
                <ul 
                    className={classNames(cls.list, mods)} 
                    onClick={onChangeHandler}
                >
                    {optionsList} 
                </ul>
            </div>
        </div>
    );
};
