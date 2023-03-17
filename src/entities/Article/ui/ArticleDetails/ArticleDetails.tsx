import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleByIdQuery } from '../../api/articleApi';
import {Text} from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/ui/Avatar';
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/ui/Text';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import ViewIcon from '@/shared/assets/icons/view.svg';
import cls from './ArticleDetails.module.css';
import { Icon } from '@/shared/ui/Icon/ui/Icon';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import {
    ArticleBlock, 
    ArticleBlockType
} from '../../model/types/Article';
import { ArticleBlockCode } from '../ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImage } from '../ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText';
import { 
    DynamicModuleLoader, ReducersList 
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsActions,
    articleDetailsReducer
} from '../../model/slice/ArticleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageError } from '@/shared/ui/PageError';
import { formatDate } from '@/shared/lib/helpers/formatDate/formatDate';

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
    const {
        id,
        className
    } = props;

    const {t} = useTranslation();
    const dispatch = useAppDispatch();


    const {data: article, isError, isLoading} = useArticleByIdQuery({id});


    useEffect(() => {
        dispatch(articleDetailsActions.setArticleDetailsData(article));
    }, [article, dispatch]);



    const renderBlock = useCallback((block: ArticleBlock, index: number) => {
        switch (block.type) {
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleBlockImage
                        key={index}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.CODE:
                return (
                    <ArticleBlockCode
                        key={index}
                        className={cls.block}
                        block={block}
                    />
                );

            case ArticleBlockType.TEXT:
                return (
                    <ArticleBlockText
                        key={index}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);


    if (isLoading) {
        return (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    }

    if (isError) {
        return (
            <PageError>
                <Text 
                    title={t('Page not found')} 
                    theme={TextTheme.ERROR}
                    textAlign={TextAlign.CENTER}
                />
            </PageError>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        className={cls.avatar}
                        size={200}
                        src={article?.image}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text
                        text={formatDate(article?.createdAt)?.toString()}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={ViewIcon} />
                    <Text
                        text={article?.views?.toString()}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </div>
        </DynamicModuleLoader>
    );
};