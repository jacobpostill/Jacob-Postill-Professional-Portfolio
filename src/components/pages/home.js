import React from 'react';
import aboutme from '../../images/home/aboutme.png';
import contactme from '../../images/home/contactme.png';
import portfolio from '../../images/home/portfolio.png';
import resume from '../../images/home/resume.png';
import sideimage from '../../images/home/sideimage.png';
import '../../css/home.css';
import '../../css/NavTabs.css';
import { Link } from "react-router-dom";


export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <div className="side-image">
        <img src={sideimage} alt="sideimage" className="image" />
      </div>
      <div className="content">
        <h1>Welcome to Jacob Positll's Website</h1>
        <h2>
          Hi my name is Jacob and this is my website. Feel free to navigate around to find out more
          about me, some of my coding projects I have completed recently, my resume, and you can also
          contact me.
        </h2>
        <div className="image-row">
          <div className='row1'>
        <Link
            to="/about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
               <img className="bubbles" src={aboutme} alt="aboutme" />
          </Link>

          <Link
            to="/portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            <img className="bubbles" src={portfolio} alt="portfolio" />
          </Link>
          </div>
          <div className='row2'>

          <Link
            to="/resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            <img className="bubbles" src={resume} alt="resume" />
          </Link>

          <Link
            to="/contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              <img className="bubbles" src={contactme} alt="contactme" />
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
}