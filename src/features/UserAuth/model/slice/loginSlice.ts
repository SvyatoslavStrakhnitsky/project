import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isOpen: false
};

export const { 
    actions: loginActions,
    reducer: loginReducer
} = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    }
});

