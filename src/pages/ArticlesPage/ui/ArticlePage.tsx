import { ArticleList } from '@/entities/Article';
import { useArticlesQuery } from '@/entities/Article/api/articleApi';
import { 
    articlesViewSelectorReducer
} from '@/features/ArticlesViewSelector/model/slice/articlesViewSelector';
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector/ui/ArticlesViewSelector';
import {
    DynamicModuleLoader, ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { FC } from 'react';
import cls from './ArticlesPage.module.css';

interface ArticlePageProps {
    className?: string;
}


const initialReducers: ReducersList = {
    articlesView: articlesViewSelectorReducer,
};


const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const {
        className,
    } = props;

    const {data: articles, isLoading} = useArticlesQuery();

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.articlePage, {}, [className])}>
                <ArticlesViewSelector />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    className={cls.list}
                />
            </div>
        </DynamicModuleLoader>
    
    );
};

export default ArticlesPage;
