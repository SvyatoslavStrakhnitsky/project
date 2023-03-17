import { ArticleViewType } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/view-list.svg';
import TileIcon from '@/shared/assets/icons/view-tile.svg';
import { ARTICLES_VIEW_STORAGE_KEY } from '@/shared/const/localStorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ViewSelector, ViewTypes } from '@/widgets/ViewSelector';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticlesView } from '../model/selectors/getArticlesView/getArticleView';
import { articlesViewSelectorActions } from '../model/slice/articlesViewSelector';

interface ArticlesViewSelectorProps {
    className?: string;
}

const viewTypes: ViewTypes<ArticleViewType>[] = [
    {
        view: 'small',
        icon: TileIcon,
    },
    {
        view: 'big',
        icon: ListIcon,
    },
];

export const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = (props) => {
    const {
        className
    } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);

    const onArticleViewChange = useCallback((view: ArticleViewType) => {
        dispatch(articlesViewSelectorActions.setArticlesView(view));
        localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, view);
    }, [dispatch]);

    return (
        <ViewSelector 
            className={className}
            viewTypes={viewTypes}
            view={view}
            onViewClick={onArticleViewChange}
        />
    );
};