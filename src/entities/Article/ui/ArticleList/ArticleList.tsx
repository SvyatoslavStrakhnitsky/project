import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleViewType } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.css';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    isFetching?: boolean;
    view?: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewType) => new Array(view === 'small' ? 10 : 5)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton key={idx} view={view} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        isLoading,
        isFetching,
        view = 'big',
        target,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            target={target}
            className={cls.card}
        />
    );

    if (!articles?.length && isLoading) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );  
    }

    if (!articles?.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text
                    title={t('No articles')}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles?.length
                ? articles.map(renderArticle)
                : null}
            {isFetching && getSkeletons(view)}
        </div>
    );
};
