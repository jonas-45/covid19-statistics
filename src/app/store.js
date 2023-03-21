import { configureStore } from '@reduxjs/toolkit';
import leaguesSliceReducer from '../redux/leagues/leaguesSlice';

const store = configureStore({
  reducer: {
    leagues: leaguesSliceReducer,
  },
});

export default store;
