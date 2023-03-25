import React from 'react';
import '../css/NavTabs.css';
import { Link } from "react-router-dom";
import topprofile from '../images/topprofile.jpg';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='navTabsClass'>
      <div className='spacing'></div>
      <h1 className="title">Jacob Postill</h1>
      <h2 className="title-descrption">Public Website - 2023</h2>
      <img src={topprofile} alt='topprofile' className='topprofile'></img>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;


