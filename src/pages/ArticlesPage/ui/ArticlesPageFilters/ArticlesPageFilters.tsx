import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/Article';
import { ArticleSortSelector } from '@/entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from '@/entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { scrollRestorationActions } from '@/features/ScrollRestoration';
import { ARTICLES_QUERY_PARAMS } from '@/shared/const/articles';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useSearchParams } from 'react-router-dom';


import { articlesPageActions } from '../../model/slice/articlesPage';
import cls from './ArticlesPageFilters.module.css';

interface ArticlesPageFiltersProps {
    className?: string;
}

const DEBOUNCE_DELAY = 500;

const {
    orderParam,
    searchParam,
    sortParam,
    typeParam
} = ARTICLES_QUERY_PARAMS;

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
    const {
        className,
    } = props;

    const {t} = useTranslation();
    const {pathname} = useLocation();

    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get(searchParam) || '');

    const onFilterChange = useCallback(<T extends string >(name: string, value: T) => {
        const field = name.toString();

        dispatch(scrollRestorationActions.setScrollPosition({
            position: 0,
            path: pathname
        }));
        dispatch(articlesPageActions.setShouldArticlesReset(true));
        dispatch(articlesPageActions.setArticlesPagePage(1));
        searchParams.set(field, value);
        setSearchParams(searchParams);
    }, [dispatch, pathname, searchParams, setSearchParams]);

    const searchFetch = useCallback((value: string) => {        
        dispatch(articlesPageActions.setArticlesPageSearch(value.trim()));
        onFilterChange(searchParam, value);
    }, [dispatch, onFilterChange]);

    const debouncedSearchFetch = useDebounce(searchFetch, DEBOUNCE_DELAY);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setArticlesPageSort(sort));
        onFilterChange(sortParam, sort);
    }, [dispatch, onFilterChange]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setArticlesPageOrder(order));
        onFilterChange(orderParam, order);
    }, [dispatch, onFilterChange]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageActions.setArticlesPageType(type));
        onFilterChange(typeParam, type);
    }, [dispatch, onFilterChange]);

    const onChangeSearch = useCallback((value: string) => {
        setSearchQuery(value);
        debouncedSearchFetch(value);
    }, [setSearchQuery, debouncedSearchFetch]);

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={searchParams.get(orderParam) as SortOrder}
                    sort={searchParams.get(sortParam) as ArticleSortField}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search') || ''}
                    value={searchQuery}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                value={searchParams.get(typeParam) as ArticleType}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
};
