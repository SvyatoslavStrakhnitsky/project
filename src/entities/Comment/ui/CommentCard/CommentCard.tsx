import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text/';
import cls from './CommentCard.module.css';
import { IComment } from '../../types/Comment';
import { Avatar } from '@/shared/ui/Avatar/ui/Avatar';
import { AppLink } from '@/shared/ui/AppLink';

interface CommentProps {
    comment?: IComment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentProps> = (props) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                    className={cls.text}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink
                to={''}
                className={cls.header}
            >
                {comment?.author?.avatar ? (
                    <Avatar
                        size={30}
                        src={comment?.author.avatar}
                    />
                ) : null }
                <Text
                    className={cls.username}
                    title={comment?.author.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment?.content}
            />
        </div>
    );
};
