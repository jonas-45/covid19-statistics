import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England';

export const getLeagues = createAsyncThunk('leagues/get-data', async () => {
  try {
    console.log('Get leagues is called at least');
    const response = await axios.get(url);
    const { countries: leaguesArray } = await response.data;
    const leagues = await leaguesArray.map((league) => ({
      id: league.idLeague,
      name: league.strLeagueAlternate,
      sportType: league.strSport,
      description: league.strDescriptionEN,
      logo: league.strLogo,
      gender: league.strGender,
      founded: league.intFormedYear,
      website: league.strWebsite,
      facebook: league.strFacebook,
      youtube: league.strYoutube,

    }));
    console.log('Leagues: ', leagues);
    return leagues;
  } catch (error) {
    console.log(error);
    return false;
  }
});

const initialState = {
  leagues: [],
};

const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLeagues.fulfilled, (state, action) => ({
      ...state,
      leagues: action.payload,
    }));
  },
});

export default leaguesSlice.reducer;
