import React from 'react';
import { Routes, Route } from 'react-router';
import Root from './components/Root';
import './App.css';
import Leagues from './pages/Leagues';
import LeagueDetail from './pages/LeagueDetail';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Root />}>
          <Route index element={<Leagues />} />
          <Route path='/leaguedetails' element={<LeagueDetail />} />
          <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
