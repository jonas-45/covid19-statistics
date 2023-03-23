import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Statistics = () => {
  const { covidStats, searchTerm } = useSelector((state) => state.covid);

  if (covidStats.length < 1) {
    return (
      <div className="text-center mt-5 pt-5">
        <p>Loading data, please wait...</p>
      </div>
    );
  }
  const filtered = searchTerm === '' || searchTerm === undefined ? covidStats : covidStats.filter((stat) => (
    stat.country.toLowerCase().includes(searchTerm.toLowerCase())
  ));
  return (
    <div className="d-flex flex-column gap-3">
      <NavBar />
      <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
        {filtered.map((info) => (
          <Card style={{ width: '18rem' }} key={info.id ? info.id : info.country} className="bg-light p-2">
            <Card.Img variant="top" src={info.flag} style={{ width: '100%', height: '50%' }} />
            <Card.Body>
              <Card.Title className="text-info">{info.country }</Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Subtitle>
                  Deaths:
                  {' '}
                  {info.deaths}
                </Card.Subtitle>
                <Card.Subtitle><NavLink to={`/${info.country}/detail/${info.id}`}><FontAwesomeIcon icon={faCircleArrowRight} size="2x" /></NavLink></Card.Subtitle>
              </div>
              <Card.Text className="mt-3">
                Polulation:
                {' '}
                {info.population}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
