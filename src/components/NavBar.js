import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
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
          <span>Sports Leagues</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleCanvas} />
        <Navbar.Offcanvas show={showCanvas} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="d-flex justify-content-end flex-grow-1 pe-5">
              <NavLink className="navlink" to="/"><FontAwesomeIcon icon={faUserCircle} size="3x" /></NavLink>
            </nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
