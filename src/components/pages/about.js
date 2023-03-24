import React from 'react';
import profilepicture from '../../images/profilepicture.jpg';
import '../../css/about.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={profilepicture} alt="profile" />
      </div>
      <div className="about-text">
        <h1>About Jacob Postill</h1>
        <p>
          Hi there, my name is Jacob Postill! I am 19 years old and 
          looking to strengthen my knowledge of coding. I have a background 
          in python and I am looking to learn as many languages as possible. 
          I have previously worked in an app start-up to help aid people in 
          the Canadian immigration process. As well, I used to work at a 
          butcher shop! I am from Toronto and love to go to the gym, play 
          basketball and video games. To reach out to me click the contact section!
        </p>
      </div>
    </div>
  );
}