import { IUser } from '@/entities/User';

export const enum ArticleBlockType {
    CODE = 'CODE', 
    IMAGE = 'IMAGE', 
    TEXT = 'TEXT'
}

export const enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE'
}

export const enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED_AT = 'createdAt'
}

export type ArticleViewType = 'small' | 'big';

export interface ArticleBlockBase {
    id:  string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock  extends ArticleBlockBase{
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock  extends ArticleBlockBase{
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
    id: string;
    title: string;
    image: string;
    author: IUser; 
    views: number;
    createdAt: Date;
    type: ArticleType[];
    subtitle?: string;
    blocks: ArticleBlock[];
}