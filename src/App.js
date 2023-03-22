import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import Root from './components/Root';
import './App.css';
import LeagueDetail from './pages/LeagueDetail';
import NoMatch from './pages/NoMatch';
import { getCovideStatistics } from './redux/covid/covidSlice';
import Statistics from './pages/Statistics';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCovideStatistics());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Statistics />} />
        <Route path="/detail" element={<LeagueDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
