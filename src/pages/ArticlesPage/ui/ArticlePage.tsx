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
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { 
    getArticlesPageHasMore 
} from '../model/selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlesPageLimit } from '../model/selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPagePage } from '../model/selectors/getArticlesPagePage/getArticlesPagePage';
import { articlesPageActions, articlesPageReducer } from '../model/slice/articlesPage';
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
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({page: `${page}`, limit: `${limit}`});
    }, [limit, page, setSearchParams]);


    const {
        articles, 
        nextPage, 
        isNextPageExists,
        isArticlesLoading,
        isArticlesFetching
    } = useArticlesQuery(`?page=${page}&limit=${limit}`, {
        selectFromResult: ({data, isLoading, isFetching}) => ({
            articles: data?.articles,
            nextPage: data?.pagination?.nextPage,
            isNextPageExists: data?.pagination?.isNextPageExists,
            isArticlesLoading: isLoading,
            isArticlesFetching: isFetching
        })
    });

    const onScrollEnd = useCallback(() => {        
        if (hasMore && isNextPageExists && nextPage) {            
            dispatch(articlesPageActions.setArticlesPagePage(nextPage));        
            dispatch(
                articlesPageActions.setArticlesPageHasMore(isNextPageExists)
            );        
        }
    }, [dispatch, hasMore, isNextPageExists, nextPage]);



    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page 
                className={classNames(cls.articlePage, {}, [className])} 
                onScrollEnd={onScrollEnd}
            >
                <ArticlesViewSelector />
                <ArticleList 
                    className={cls.list}
                    articles={articles}
                    view={view}
                    isLoading={isArticlesLoading || isArticlesFetching}
                />
            </Page>
        </DynamicModuleLoader>
    
    );
};

export default ArticlesPage;
