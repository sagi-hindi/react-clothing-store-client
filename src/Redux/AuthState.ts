import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserModel } from '../models/user.model';
import { CredentialsModel } from '../models/credentials.model';


export interface UserState {
    currentUser: UserModel;
    isFetching: boolean;
    error: boolean;
  };

  const initialState: UserState = {
    currentUser: null,
    isFetching:false,
    error:false,
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    loginStart: (state) => {
        state.isFetching = true;
    },
    loginSuccess: (state,  action: PayloadAction<any>) => {
        state.isFetching = false;
        state.currentUser = action.payload;
        state.error = false;
    },
    loginFailure: (state) => {
        state.isFetching =false
        state.error = true;
    },
    clearResults: (state) => {
        state.currentUser = null;
        state.error = false;
        
    },
    },
})
export const { loginStart, loginSuccess, loginFailure, clearResults} = userSlice.actions


export default userSlice.reducer;