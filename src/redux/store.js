import { configureStore } from '@reduxjs/toolkit';
import covidSliceReducer from './covid/covidSlice';

const store = configureStore({
  reducer: {
    covid: covidSliceReducer,
  },
});

export default store;
