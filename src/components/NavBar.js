import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Navbar, Offcanvas, Nav, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import logo from '../images/sports-leagues.png';
import { searchByCountryName } from '../redux/covid/covidSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const [showCanvas, setShowCanvas] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleClose = () => setShowCanvas(false);
  const toggleCanvas = () => setShowCanvas((s) => !s);
  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(searchByCountryName(searchTerm));
  }, [searchTerm, dispatch]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" className="mb-5">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" className="d-inline-block" style={{ width: '60px' }} />
          <span>Covid19 Statistics</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleCanvas} />
        <Navbar.Offcanvas show={showCanvas} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-flex justify-content-between align-items-center flex-grow-1 pe-4">
              <Form inline>
                <Form.Control type="text" placeholder="Search" onChange={updateSearchTerm} className="mr-sm-2" />
              </Form>
              <NavLink className="navlink" to="/"><FontAwesomeIcon icon={faUserCircle} size="2x" /></NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
