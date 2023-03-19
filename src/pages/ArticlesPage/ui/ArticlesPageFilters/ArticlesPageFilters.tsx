
import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/Article';
import { ArticleSortSelector } from '@/entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from '@/entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { 
    getArticlesPageOrder 
} from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import {
    getArticlesPageSearch
} from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import { articlesPageActions } from '../../model/slice/articlesPage';
import cls from './ArticlesPageFilters.module.css';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
    const {
        className,
    } = props;

    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setArticlesPageSort(sort));
        dispatch(articlesPageActions.setShouldArticlesReset(true));
        dispatch(articlesPageActions.setArticlesPagePage(1));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setArticlesPageOrder(order));
        dispatch(articlesPageActions.setShouldArticlesReset(true));
        dispatch(articlesPageActions.setArticlesPagePage(1));
    }, [dispatch]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setArticlesPageSearch(search));
        dispatch(articlesPageActions.setShouldArticlesReset(true));
        dispatch(articlesPageActions.setArticlesPagePage(1));
    }, [dispatch]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageActions.setArticlesPageType(type));
        dispatch(articlesPageActions.setShouldArticlesReset(true));
        dispatch(articlesPageActions.setArticlesPagePage(1));
    }, [dispatch]);



    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search') || ''}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
};
