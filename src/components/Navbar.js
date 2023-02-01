import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/Navbar.css';

function navbar({ __, handlePageChange }) {
  return (
    <header>
      <Navbar 
        collapseOnSelect expand="sm"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand 
            style={{ 
              color: '#03A6A6',
              fontSize: '20px'  
            }} 
            onClick={() => handlePageChange('Home')}
            href="#home">CRAIG PUTZSTUCK</Navbar.Brand>
          <Navbar.Toggle aria-controls="toggle-nav"/>
          <Navbar.Collapse 
            className="justify-content-end"
            id="toggle-nav"
          >
              <Nav activeKey={'#home'}>
                <Nav.Link
                  style={{ color: '#03A6A6' }}
                  onClick={() => handlePageChange('Work')} 
                  eventKey="#work">Work</Nav.Link>
                <Nav.Link
                  style={{ color: '#03A6A6' }}
                  onClick={() => handlePageChange('About')} 
                  eventKey="#about">About</Nav.Link>
                <Nav.Link
                  style={{ color: '#03A6A6' }}
                  onClick={() => handlePageChange('Resume')}
                  eventKey="#resume">Resume</Nav.Link>
                <Nav.Link
                  style={{ color: '#03A6A6' }} 
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