import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import Statistics from '../pages/Statistics';
import store from '../redux/store';
import { getCovideStatistics } from '../redux/covid/covidSlice';

it('Country  page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Statistics />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Country  slicer and reducer check
describe('Countries redux state tests', () => {
  it('Should initially hold country data by default', () => {
    const state = store.getState().covid;
    expect(state.covidStats.length).toEqual(0);
  });

  it('Fetch covid data from API', async () => {
    const url = 'https://disease.sh/v3/covid-19/countries';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await getCovideStatistics(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
