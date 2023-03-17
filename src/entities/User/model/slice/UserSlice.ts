import { IUser } from '../types/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
    isAuth: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUserData: (state, action: PayloadAction<IUser>) => {            
            state.data = action.payload;            
        },
    }
});

export const {
    actions: userActions,
    reducer: userReducer
} = userSlice;