import React from 'react';
import aboutme from '../../images/home/aboutme.jpg';
import contactme from '../../images/home/contactme.jpg';
import portfolio from '../../images/home/portfolio.png';
import resume from '../../images/home/resume.png';
import sideimage from '../../images/home/sideimage.png';
import '../../css/home.css';

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
          <a href="/about" >
            <img className="bubbles" src={aboutme} alt="aboutme" />
          </a>

          <a href="/Portfolio" >
            <img className="bubbles" src={portfolio} alt="portfolio" />
          </a>

          <a href="/resume" >
            <img className="bubbles" src={resume} alt="resume" />
          </a>

          <a href="/contact" >
            <img className="bubbles" src={contactme} alt="contactme" />
          </a>
        </div>
      </div>
    </div>
  );
}