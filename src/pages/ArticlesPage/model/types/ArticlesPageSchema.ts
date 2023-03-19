import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema {
    page?: number;
    limit?: number;
    hasMore?: boolean | null;
    sort?: ArticleSortField;
    order?: SortOrder;
    type?: ArticleType;
    search?: string;
    replace?: boolean;
}