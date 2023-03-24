import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

const CovidStatDetails = () => {
  const { id } = useParams();
  const statsArray = useSelector((state) => state.covid.covidStats);
  const detailArr = statsArray.find((stat) => parseInt(stat.id, 10) === parseInt(id, 10));
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <div className="d-flex flex-row justify-content-center gap-2">
        <div className="text-left">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" className="text-primary mb-2" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        </div>
        <Card className="text-center bg-light mb-5" style={{ width: '40rem' }}>
          <Card.Img src={detailArr.flag} className="p-3" variant="top" style={{ width: '100%' }} />
          <Card.Body>
            <Card.Title><h1 className="text-primary">{detailArr.country}</h1></Card.Title>
            <div className="d-flex flex-column gap-2 mt-2">
              <Badge bg="light" className="p-4 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Continent
                  {' '}
                </span>
                <span className="text-info">{detailArr.continent}</span>
              </Badge>
              <Badge bg="white" className="p-4 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Polulation
                  {' '}
                </span>
                <span className="text-info">{detailArr.population}</span>
              </Badge>
              <Badge bg="light" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Critical
                  {' '}
                </span>
                <span className="text-info">{detailArr.critical}</span>
              </Badge>
              <Badge bg="white" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Total Cases
                  {' '}
                </span>
                <span className="text-info">{detailArr.cases}</span>
              </Badge>
              <Badge bg="light" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Total Deaths
                  {' '}
                </span>
                <span className="text-info">{detailArr.deaths}</span>
              </Badge>
              <Badge bg="white" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Cases Today
                  {' '}
                </span>
                <span className="text-info">{detailArr.today}</span>
              </Badge>
              <Badge bg="light" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Deaths Today
                  {' '}
                </span>
                <span className="text-info">{detailArr.deathstoday}</span>
              </Badge>
              <Badge bg="white" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Active
                  {' '}
                </span>
                <span className="text-info">{detailArr.active}</span>
              </Badge>
              <Badge bg="light" className="p-3 fs-6 text-center d-flex justify-content-between align-items-center border border-success">
                <span className="text-dark">
                  Total Tests
                  {' '}
                </span>
                <span className="text-info">{detailArr.tests}</span>
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default CovidStatDetails;
