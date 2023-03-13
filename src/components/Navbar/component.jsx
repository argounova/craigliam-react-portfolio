import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Navigation() {
  return (
    <Navbar 
      collapseOnSelect expand="sm"
      variant="dark"
      className="custom-nav"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="toggle-nav"/>
        <Navbar.Collapse 
          className="justify-content-center"
          id="toggle-nav"
        >
            <Nav>
              <NavHashLink
                style={{ color: '#03A6A6', textDecoration: 'none', padding: '8px' }}
                smooth to='#work'>work</NavHashLink>
              <NavHashLink
                style={{ color: '#03A6A6', textDecoration: 'none', padding: '8px' }}
                smooth to='#about'>about</NavHashLink>
              <NavHashLink
                style={{ color: '#03A6A6', textDecoration: 'none', padding: '8px' }}
                smooth to='#inquire'>inquire</NavHashLink>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;