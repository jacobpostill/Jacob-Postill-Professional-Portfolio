import React from 'react';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import '../css/footer.css'
const Footer = () => {
  return (
    <div className="image-container">
      <a href="https://github.com/jacobpostill">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/jacob-postill/">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/jacob_postill/">
        <img className="footerimg" src={instagram} alt="Instagram" />
      </a>
    </div>
  );
}

export default Footer;
