import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import './App.css';
import NoMatch from './pages/NoMatch';
import { getCovideStatistics } from './redux/covid/covidSlice';
import Statistics from './pages/Statistics';
import CovidStatDetails from './pages/CovidStatDetails';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCovideStatistics());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Statistics />} />
      <Route path="/:country/detail/:id" element={<CovidStatDetails />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
