import React from 'react';
import '../styles/Navbar.css';

function navbar({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >Work
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#inquire"
            onClick={() => handlePageChange('Inquire')}
            className={currentPage === 'Inquire' ? 'nav-link active' : 'nav-link'}
          >Inquire
          </a>
        </li>
      </ul>
    </header>
  );
}

export default navbar;