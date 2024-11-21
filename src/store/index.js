import { configureStore } from '@reduxjs/toolkit';
import stakeholderReducer from './stakeholderSlice';

const store = configureStore({
  reducer: {
    stakeholders: stakeholderReducer,
  },
});

export default store;
