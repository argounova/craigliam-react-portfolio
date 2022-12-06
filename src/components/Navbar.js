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
          >Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#blog"
            onClick={() => handlePageChange('Blog')}
            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Inquire
          </a>
        </li>
      </ul>
    </header>
  );
}

export default navbar;