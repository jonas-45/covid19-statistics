import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Statistics = () => {
  const { covidStats } = useSelector((state) => state.covid);
  if (covidStats.length < 1) {
    return (
      <div>
        <p>Loading data, please wait...</p>
      </div>
    );
  }
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
      {covidStats.map((info) => (
        <Card style={{ width: '18rem' }} key={info.id} className="bg-light p-2">
          <Card.Img variant="top" src={info.flag} style={{ width: '100%', height: '50%' }} />
          <Card.Body>
            <Card.Title>{info.country }</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Subtitle>
                Deaths:
                {' '}
                {info.deaths}
              </Card.Subtitle>
              <Card.Subtitle><FontAwesomeIcon icon={faCircleArrowRight} size="2x" /></Card.Subtitle>
            </div>
            <Card.Text className='mt-3'>
              Polulation:
              {' '}
              {info.population}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Statistics;
