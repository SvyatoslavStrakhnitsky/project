import { AppRoutes } from '@/app/router/config/config';
import { ArticleDetails } from '@/entities/Article';
import { 
    getArticleDetailsData
} from '@/entities/Article/model/selectors/getArticleDetailsData/getArticleDetailsData';
import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { Button } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/ui/Text';
import { Page } from '@/widgets/Page';
import { Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.css';

const ArticleDetailsPage = () => {
    const {t} = useTranslation();
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);

    
    const onBackToList = useCallback(() => {
        navigate(AppRoutes.ARTICLES);
    }, [navigate]);


    if (!id) {
        return <Text title={t('Page not found')} theme={TextTheme.ERROR}/>;
    }

    return (
        <Page>

            <Button onClick={onBackToList}>
                {t('Back to list')}
            </Button>
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
        </Page>
    );
};

export default ArticleDetailsPage;
