import { FC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleViewType } from '../../model/types/Article';
import cls from './ArticleListItem.module.css';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleViewType;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
    const {
        view,
        className,
    } = props;

    if (view === 'big') {
        return (
            <div className={classNames(cls.articleListItemSkeleton, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            border="50%"
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={cls.title}
                    />
                    <Skeleton
                        width={'100%'}
                        height={200}
                        className={cls.img}
                    />
                    <div className={cls.footer}>
                        <Skeleton
                            width={200}
                            height={36}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItemSkeleton, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton
                        width={'100%'}
                        height={200}
                        className={cls.img}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton
                        width={130}
                        height={16}
                        className={cls.img}
                    />
                </div>
                <Skeleton
                    width={150}
                    height={16}
                    className={cls.title}
                />
            </Card>
        </div>
    );
};
