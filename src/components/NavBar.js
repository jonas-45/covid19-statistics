import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Navbar, Offcanvas, Nav, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import logo from '../images/sports-leagues.png';
import { updateSearchTerm } from '../redux/covid/covidSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const [showCanvas, setShowCanvas] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleClose = () => setShowCanvas(false);
  const toggleCanvas = () => setShowCanvas((s) => !s);
  const updateSearchText = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(updateSearchTerm(searchTerm));
  }, [searchTerm, dispatch]);
  return (
    <div className="mb-5 pt-5">
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
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
                  <Form.Control type="text" placeholder="Search" onChange={updateSearchText} className="mr-sm-2" />
                </Form>
                <NavLink className="navlink" to="/"><FontAwesomeIcon icon={faUserCircle} size="2x" /></NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
