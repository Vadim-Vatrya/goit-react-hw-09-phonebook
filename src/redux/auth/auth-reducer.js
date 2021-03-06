// import {combineReducers} from 'redux';
// import {createReducer} from  '@reduxjs/toolkit';
// import authActions from './auth-actions';
import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';


const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuthenticated: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
  },
  [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
  },
  [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuthenticated = false;
  },
  [authOperations.getCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
  },
  [authOperations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isFetchingCurrentUser = false;
  },
  [authOperations.getCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
  },
  }
});

export default authSlice.reducer;



