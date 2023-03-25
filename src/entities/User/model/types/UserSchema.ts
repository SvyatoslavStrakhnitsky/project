import { IUser } from './User';

export interface UserSchema {
    isAuth: boolean;
    readonly: boolean;
    data?: IUser;
    editData?: IUser;
}