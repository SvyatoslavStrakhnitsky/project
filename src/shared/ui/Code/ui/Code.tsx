import { FC, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '../../Button';
import cls from './Code.module.css';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = (props) => {
    const {
        text,
        className,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                theme={'clear'}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
};
