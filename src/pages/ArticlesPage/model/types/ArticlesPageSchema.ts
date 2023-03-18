export interface ArticlesPageSchema {
    page?: number;
    limit?: number;
    hasMore?: boolean | null;
}