import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import ViewIcon from '@/shared/assets/icons/view.svg';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleViewType,
} from '../../model/types/Article';
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText';
import cls from './ArticleListItem.module.css';
import { formatDate } from '@/shared/lib/helpers/formatDate/formatDate';
import { AppRoutes } from '@/app/router/config/config';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const {
        className,
        article,
        view,
        target,
    } = props;

    const { t } = useTranslation();

    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );

    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <Icon Svg={ViewIcon} />
        </>
    );

    if (view === 'big') {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.author?.avatar}
                            alt={article.author.username}
                        />
                        <Text
                            text={article.author.username}
                            className={cls.username}
                        />
                        <Text
                            text={formatDate(article?.createdAt)}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        text={article.title}
                        className={cls.title}
                    />
                    {types}
                    <img
                        src={article.image}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleBlockText
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={AppRoutes.ARTICLES_DETAILS + article.id}
                            target={target}
                        >
                            <Button>
                                {t('Read more')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={AppRoutes.ARTICLES_DETAILS + article.id}
            target={target}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text
                        text={formatDate(article.createdAt)}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </AppLink>
    );
};
