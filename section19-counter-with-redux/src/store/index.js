import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
