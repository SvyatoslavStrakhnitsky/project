import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/User';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
    isAuth: false,
    readonly: true,
    data: undefined,
    editData: undefined,
};

export const {
    actions: userActions,
    reducer: userReducer
} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUserData: (state, action: PayloadAction<IUser| undefined>) => {            
            state.data = action.payload;            
            state.editData = action.payload;            
        },
        setReadonly:  (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfileData: (state, action: PayloadAction<IUser>) => {
            state.editData = {
                ...state.data,
                ...action.payload
            };
        },
        cancelEdit:  (state) => {
            state.readonly = true;
            state.editData = state.data;
        },
        acceptUpdatingProfile:  (state) => {
            state.readonly = true;
            state.data = state.editData;
        },
    }
});