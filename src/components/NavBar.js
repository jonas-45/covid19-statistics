import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Navbar, Offcanvas, Nav, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/sports-leagues.png';

const NavBar = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const handleClose = () => setShowCanvas(false);
  const toggleCanvas = () => setShowCanvas((s) => !s);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" className="d-inline-block" style={{ width: '80px' }} />
          <span>Covid19 Statistics</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleCanvas} />
        <Navbar.Offcanvas show={showCanvas} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-flex justify-content-between align-items-center flex-grow-1 pe-5">
              <Form inline>
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
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
