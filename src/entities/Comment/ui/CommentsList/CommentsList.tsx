import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentsList.module.css';
import { useCommentsQuery } from '../../api/commentApi';

interface CommentsListProps {
    entityId: string;
    className?: string;
}

export const CommentsList: FC<CommentsListProps> = (props) => {
    const {
        className,
        entityId,
    } = props;

    const { t } = useTranslation();

    const {data: comments, isLoading, isError} = useCommentsQuery({entityId});

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    
    if (isError) {
        return <Text title={t('Comments not found')} theme={TextTheme.ERROR}/>;
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('No comments')} />}
        </div>
    );
};
