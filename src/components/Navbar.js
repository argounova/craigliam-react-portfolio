import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/styles/Navbar.css';

function navbar({ __, handlePageChange }) {
  return (
    <header>
      <Navbar collapseOnSelect expand="sm">
        <Container fluid>
          <Navbar.Brand 
            style={{ 
              color: '#04BFAD',
              fontSize: '30px'  
            }} 
            onClick={() => handlePageChange('Home')}
            href="#home">CP | DEV</Navbar.Brand>
          <Navbar.Toggle aria-controls="toggle-nav"/>
          <Navbar.Collapse 
            className="justify-content-end"
            id="toggle-nav"
          >
              <Nav activeKey={'#home'}>
                <Nav.Link
                  style={{ color: '#04BFAD' }}
                  onClick={() => handlePageChange('Work')} 
                  eventKey="#work">Work</Nav.Link>
                <Nav.Link
                  style={{ color: '#04BFAD' }}
                  onClick={() => handlePageChange('About')} 
                  eventKey="#about">About</Nav.Link>
                <Nav.Link
                  style={{ color: '#04BFAD' }}
                  onClick={() => handlePageChange('Resume')}
                  eventKey="#resume">Resume</Nav.Link>
                <Nav.Link
                  style={{ color: '#04BFAD' }} 
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