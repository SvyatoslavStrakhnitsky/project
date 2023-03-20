import { ArticleList } from '@/entities/Article';
import { useArticlesQuery } from '@/entities/Article/api/articleApi';
import {
    getArticlesView
} from '@/features/ArticlesViewSelector/model/selectors/getArticlesView/getArticleView';
import {
    articlesViewSelectorReducer
} from '@/features/ArticlesViewSelector/model/slice/articlesViewSelector';
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector/ui/ArticlesViewSelector';
import {
    DynamicModuleLoader, ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
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


const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    const page = useSelector(getArticlesPagePage);
    const limit = useSelector(getArticlesPageLimit);
    const hasMore = useSelector(getArticlesPageHasMore);
    const view = useSelector(getArticlesView);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const replace = useSelector(getShouldArticlesReset);

    const {
        articles, 
        nextPage, 
        isNextPageExists,
        isArticlesLoading,
        isArticlesFetching,
    } = useArticlesQuery( {replace, page, limit, search, type, sort, order}, {
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
