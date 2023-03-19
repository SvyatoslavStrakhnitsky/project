import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
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
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <option
            key={value}
            className={cls.option}
            value={value}
        >
            {content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label
                ? <span className={cls.label}>{`${label}>`}</span>
                : null}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
