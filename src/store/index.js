import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import allTestsSlice from './slices/allTests';

const store = configureStore({
  reducer: {
    user: userSlice,
    allTests: allTestsSlice,
  },
});

export default store;
