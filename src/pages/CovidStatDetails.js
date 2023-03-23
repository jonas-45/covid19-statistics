import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

const CovidStatDetails = () => {
  const { id } = useParams();
  const statsArray = useSelector((state) => state.covid.covidStats);
  const detailArr = statsArray.filter((stat) => parseInt(stat.id, 10) === parseInt(id, 10));
  const navigate = useNavigate();
  return (
    <div className="mt-5 pt-5">
      <div className="d-flex flex-row justify-content-center gap-2">
        <div className="text-left">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" className="text-primary mb-2" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        </div>
        <Card className="text-center bg-light p-3" style={{ width: '40rem' }}>
          <Card.Img src={detailArr[0].flag} variant="top" style={{ width: '100%' }} />
          <Card.Body>
            <Card.Title><h1 className="text-primary">{detailArr[0].country}</h1></Card.Title>
            <div className="d-flex flex-wrap gap-5 mt-5">
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Continent:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].continent}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Polulation:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].population}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Critical:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].critical}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Total Cases:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].cases}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Total Deaths:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].deaths}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Cases Today:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].today}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Deaths Today:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].deathstoday}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Active:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].active}</span>
              </Badge>
              <Badge bg="success" className="p-2 fs-6 text-center">
                <span className="text-light">
                  Total Tests:
                  {' '}
                </span>
                <span className="text-info">{detailArr[0].tests}</span>
              </Badge>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default CovidStatDetails;
