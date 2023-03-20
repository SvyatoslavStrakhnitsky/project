import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/Article';
import { ArticleSortSelector } from '@/entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleTypeTabs } from '@/entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { scrollRestorationActions } from '@/features/ScrollRestoration';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { 
    getArticlesPageOrder 
} from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import { articlesPageActions } from '../../model/slice/articlesPage';
import cls from './ArticlesPageFilters.module.css';

interface ArticlesPageFiltersProps {
    className?: string;
}

const DEBOUNCE_DELAY = 500;

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = (props) => {
    const {
        className,
    } = props;

    const {t} = useTranslation();
    const {pathname} = useLocation();

    const dispatch = useAppDispatch();

    const [searchQuery, setSearchQuery] = useState('');

    const onFilterChange = useCallback(() => {
        dispatch(scrollRestorationActions.setScrollPosition({
            position: 0,
            path: pathname
        }));
        dispatch(articlesPageActions.setShouldArticlesReset(true));
        dispatch(articlesPageActions.setArticlesPagePage(1));
    }, [dispatch, pathname]);

    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const type = useSelector(getArticlesPageType);

    const searchFetch = useCallback((value: string) => {        
        dispatch(articlesPageActions.setArticlesPageSearch(value.trim()));
        onFilterChange();
    }, [dispatch, onFilterChange]);

    const debouncedSearchFetch = useDebounce(searchFetch, DEBOUNCE_DELAY);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setArticlesPageSort(sort));
        onFilterChange();
    }, [dispatch, onFilterChange]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setArticlesPageOrder(order));
        onFilterChange();
    }, [dispatch, onFilterChange]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageActions.setArticlesPageType(type));
        onFilterChange();
    }, [dispatch, onFilterChange]);

    const onChangeSearch = useCallback((value: string) => {
        setSearchQuery(value);
        debouncedSearchFetch(value);
    }, [setSearchQuery, debouncedSearchFetch]);

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
                    value={searchQuery}
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
