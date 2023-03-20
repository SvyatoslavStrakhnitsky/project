import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select';
import { ArticleSortField } from '../../model/types/Article';
import cls from './ArticleSortSelector.module.css';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Ascending'),
        },
        {
            value: 'desc',
            content: t('Descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED_AT,
            content: t('Date of creation'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                label={t('Sort by')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('Order')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}

            />
        </div>
    );
};
