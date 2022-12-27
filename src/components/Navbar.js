import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/Navbar.css';

function navbar({ __, handlePageChange }) {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => handlePageChange('Home')}
            href="#home">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav activeKey={'#home'}>
              <Nav.Link
                onClick={() => handlePageChange('Work')} 
                eventKey="#work">Work</Nav.Link>
              <Nav.Link
                onClick={() => handlePageChange('About')} 
                eventKey="#about">About</Nav.Link>
              <Nav.Link 
                onClick={() => handlePageChange('Resume')}
                eventKey="#resume">Resume</Nav.Link>
              <Nav.Link 
                onClick={() => handlePageChange('Inquire')}
                eventKey="#inquire">Inquire</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default navbar;