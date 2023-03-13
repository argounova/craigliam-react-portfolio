import React from 'react';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function Navigation() {
  return (
    <header>
      <Navbar 
        collapseOnSelect expand="sm"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand  
            >
              <HashLink
              to='#'
              style={{ 
                color: '#03A6A6',
                fontSize: '20px',
                textDecoration: 'none'  
              }}
              >
                CRAIG PUTZSTUCK
              </HashLink>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="toggle-nav"/>
          <Navbar.Collapse 
            className="justify-content-end"
            id="toggle-nav"
          >
              <Nav activeKey={'#home'}>
                <NavHashLink
                  style={{ color: '#03A6A6', textDecoration: 'none', padding: '8px' }}
                  smooth to='#work'>Work</NavHashLink>
                <NavHashLink
                  style={{ color: '#03A6A6', textDecoration: 'none', padding: '8px' }}
                  smooth to='#about'>About</NavHashLink>
                <NavHashLink
                  style={{ color: '#03A6A6', textDecoration: 'none', padding: '8px' }}
                  smooth to='#inquire'>Inquire</NavHashLink>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;