import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import Root from './components/Root';
import './App.css';
import Leagues from './pages/Leagues';
import LeagueDetail from './pages/LeagueDetail';
import NoMatch from './pages/NoMatch';
import { getLeagues } from './redux/leagues/leaguesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Leagues />} />
        <Route path="/leaguedetails" element={<LeagueDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
