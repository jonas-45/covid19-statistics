/* eslint no-underscore-dangle: 0 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/countries';

export const getCovideStatistics = createAsyncThunk('covid/get-data', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    const stats = await response.data.map((info) => ({
      id: info.countryInfo._id,
      updated: info.updated,
      flag: info.countryInfo.flag,
      country: info.country,
      deaths: info.deaths,
      population: info.population,
      continent: info.continent,
      cases: info.cases,
      recovered: info.recovered,
      today: info.todayCases,
      deathstoday: info.todayDeaths,
      active: info.active,
      critical: info.critical,
      tests: info.tests,
    }));
    return stats;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data?.message || 'Cannot fetch data...',
    );
  }
});

const initialState = {
  covidStats: [],
  filtered: [],
};

const covidSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {
    searchByCountryName: (state, action) => {
      const filteredList = state.covidStats.filter((data) => (
        data.country.toLowerCase().includes(action.payload.toLowerCase())
      ));
      return {
        ...state,
        filtered: action.payload.length > 0 ? filteredList : state.covidStats,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCovideStatistics.fulfilled, (state, action) => ({
      ...state,
      covidStats: action.payload,
      filtered: action.payload,
    }));
  },
});

export const { searchByCountryName } = covidSlice.actions;
export default covidSlice.reducer;
