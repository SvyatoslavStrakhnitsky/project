import { ArticleDetails } from '@/entities/Article';
import { 
    getArticleDetailsData
} from '@/entities/Article/model/selectors/getArticleDetailsData/getArticleDetailsData';
import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/ui/Text';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.css';

const ArticleDetailsPage = () => {
    const {t} = useTranslation();
    const { id } = useParams<{ id: string }>();

    const article = useSelector(getArticleDetailsData);


    if (!id) {
        return <Text title={t('Page not found')} theme={TextTheme.ERROR}/>;
    }

    return (
        <>
            <ArticleDetails id={id} />
            {
                article 
                    ?  <> 
                        <Text
                            title={t('Comments')}
                            textAlign={TextAlign.CENTER}
                            size={TextSize.L}
                            className={cls.commentTitle}
                        />
                        <Suspense fallback={
                            <Skeleton
                                width="100%"
                                height={70}
                            />
                        }>
                            <AddCommentForm entityId={id}/>
                        </Suspense>
                        <CommentsList entityId={id} />
                    </>
                    : null
            }   
        </>
    );
};

export default ArticleDetailsPage;
