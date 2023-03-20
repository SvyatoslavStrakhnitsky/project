import { ArticleList } from '@/entities/Article';
import { useArticlesQuery } from '@/entities/Article/api/articleApi';
import {
    getArticlesView
} from '@/features/ArticlesViewSelector/model/selectors/getArticlesView/getArticleView';
import {
    articlesViewSelectorReducer
} from '@/features/ArticlesViewSelector/model/slice/articlesViewSelector';
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector/ui/ArticlesViewSelector';
import { ARTICLES_QUERY_PARAMS } from '@/shared/const/articles';
import { QUERY_PARAMS } from '@/shared/const/common';
import {
    DynamicModuleLoader, ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlesPageHasMore
} from '../../model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import {
    getArticlesPageLimit
} from '../../model/selectors/getArticlesPageLimit/getArticlesPageLimit';
import {
    getArticlesPageOrder
} from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import {
    getArticlesPagePage
} from '../../model/selectors/getArticlesPagePage/getArticlesPagePage';
import {
    getArticlesPageSearch
} from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageType } from '../../model/selectors/getArticlesPageType/getArticlesPageType';
import {
    getShouldArticlesReset
} from '../../model/selectors/getShouldArticlesReset/getShouldArticlesReset';
import { articlesPageActions, articlesPageReducer } from '../../model/slice/articlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.css';

interface ArticlePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articlesView: articlesViewSelectorReducer,
    articlesPage: articlesPageReducer
};

const {
    limitParam,
    pageParam
} = QUERY_PARAMS;

const {
    orderParam,
    searchParam,
    sortParam,
    typeParam
} = ARTICLES_QUERY_PARAMS;

const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const page = useSelector(getArticlesPagePage);
    const limit = useSelector(getArticlesPageLimit);
    const hasMore = useSelector(getArticlesPageHasMore);
    const view = useSelector(getArticlesView);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const replace = useSelector(getShouldArticlesReset);

    const getParams = useCallback((val: string) => {
        return searchParams.get(val) || '';
    }, [searchParams]);

    const queryParams = {
        search: getParams(searchParam) ? getParams(searchParam) : `${search}`,
        type: getParams(typeParam) ? getParams(typeParam) : `${type}`,
        sort: getParams(sortParam) ? getParams(sortParam) : `${sort}`,
        order: getParams(orderParam) ? getParams(orderParam) :`${order}`
    };

    useEffect(() => {
        searchParams.set(pageParam, `${page}`);
        searchParams.set(limitParam, `${limit}`);
        searchParams.set(searchParam, getParams(searchParam) 
            ? getParams(searchParam) 
            : `${search}`);
        searchParams.set(typeParam, getParams(typeParam) 
            ? getParams(typeParam) 
            :`${type}`);
        searchParams.set(sortParam,  getParams(sortParam) 
            ? getParams(sortParam) 
            :`${sort}`);
        searchParams.set(orderParam, getParams(orderParam) 
            ? getParams(orderParam) 
            :`${order}`);
        setSearchParams(searchParams);
    }, [getParams, limit, order, page, search, searchParams, setSearchParams, sort, type]);

    const {
        articles, 
        nextPage, 
        isNextPageExists,
        isArticlesLoading,
        isArticlesFetching,
    } = useArticlesQuery( {replace, page, limit, ...queryParams}, {
        selectFromResult: ({data, isLoading, isFetching}) => ({
            articles: data?.articles,
            nextPage: data?.pagination?.nextPage,
            isNextPageExists: data?.pagination?.isNextPageExists,
            isArticlesLoading: isLoading,
            isArticlesFetching: isFetching,
        }),
    });

    const onScrollEnd = useCallback(() => {        
        if (hasMore && isNextPageExists && nextPage) {            
            dispatch(articlesPageActions.setArticlesPagePage(nextPage));        
            dispatch(
                articlesPageActions.setArticlesPageHasMore(isNextPageExists)
            );
            dispatch(articlesPageActions.setShouldArticlesReset(false));        
        }
    }, [hasMore, isNextPageExists, nextPage, dispatch]);

    const isLoading = isArticlesLoading || isArticlesFetching;

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <Page 
                className={classNames(cls.articlePage, {}, [className])} 
                onScrollEnd={onScrollEnd}
            >
                <ArticlesPageFilters />
                <ArticlesViewSelector />
                <ArticleList 
                    className={cls.list}
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    
    );
};

export default ArticlesPage;
