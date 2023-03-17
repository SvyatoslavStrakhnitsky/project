import { IUser } from '@/entities/User';

export interface IComment {
    id: string;
    entityId: string;
    content: string;
    author: IUser;
}