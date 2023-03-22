import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/countries';

export const getCovideStatistics = createAsyncThunk('covid/get-data', async () => {
  try {
    const response = await axios.get(url);
    const stats = await response.data.map((info) => ({
      id: info.countryInfo._id, //no-underscore-dangle
      updated: info.updated,
      flag: info.countryInfo.flag,
      country: info.country,
      cases: info.cases,
      tests: info.tests,
      deaths: info.deaths,
      population: info.population,
      recovered: info.recovered,
      active: info.active,
      critical: info.critical,
    }));
    return stats;
  } catch (error) {
    return false;
  }
});

const initialState = {
  covidStats: [],
  status: 'idle',
  error: null,
  search: '',
};

const covidSlice = createSlice({
  name: 'covidData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCovideStatistics.fulfilled, (state, action) => ({
      ...state,
      covidStats: action.payload,
    }));
  },
});

export default covidSlice.reducer;
