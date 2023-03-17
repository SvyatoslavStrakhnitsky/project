

import { getUserData } from '@/entities/User';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCreateCommentMutation } from '../api/commentApi';
import cls from './AddCommentForm.module.css';

export interface AddCommentFormProps {
    entityId: string;
    className?: string;
}

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const {
        className,
        entityId,
    } = props;

    const { t } = useTranslation();
    const [text, setText] = useState('');

    const user = useSelector(getUserData);
    const [createComment, {isLoading}] = useCreateCommentMutation();


    const onCommentTextChange = useCallback((value: string) => {
        setText(value);
    }, []);

    const content = text.trim();

    const onSendHandler = useCallback(() => {

        if (user?.id && content) {
            createComment({
                entityId, 
                userId: user.id,
                content
            });
            onCommentTextChange('');
        }

    }, [createComment, entityId, onCommentTextChange, content, user?.id]);
    
    return (
        <div className={classNames(cls.addCommentForm, {}, [className])}>
            <Input
                className={cls.input}
                value={text}
                placeholder={t('Write a comment') || ''}
                onChange={onCommentTextChange}
            />

            <Button onClick={onSendHandler} disabled={isLoading}>
                {t('Send')}
            </Button>
        </div>        
    );
};  


export default AddCommentForm;
