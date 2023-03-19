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
    view?: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewType) => new Array(view === 'small' ? 9 : 3)
    .fill(0)
    .map((_, idx) => <ArticleListItemSkeleton key={idx} view={view} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        isLoading,
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

    if (!isLoading && !articles?.length) {
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
            {isLoading && getSkeletons(view)}
        </div>
    );
};
