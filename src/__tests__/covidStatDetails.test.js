import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Statistics from '../pages/Statistics';
import store from '../redux/store';

describe('Test for countryDetails', () => {
  test('should render', () => {
    const country = {
      id: 13,
      death: '1933',
      critical: '0',
      country: 'Angola',
      active: '23',
      cases: '105298',
      recovered: '103342',
      tests: '1499795',
      today: '123',
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Statistics countries={country} key={24} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
