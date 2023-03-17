import { IUser } from '../..';

export interface UserSchema {
    isAuth: boolean;
    data?: IUser;
}