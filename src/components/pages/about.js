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
          from Toronto Ontario. I love to go to the gym, play 
          basketball and video games. I also enjoy spending time with my family; my dad, David;
          mom, Shannon; and sisters, Anna and Gemma.
          <br></br>
          <br></br>
          I have spent the last four months learning how to code at the University of 
          Toronto Coding Bootcamp. There I have learned many languages and developed a deep
          understanding for coding. I also have gained work expierence as  
          I have previously worked in an app start-up to help aid people in 
          the Canadian immigration process. As well, I used to work at a 
          butcher shop!
          <br></br>
          <br></br>
          Thanks for taking the time to get to know me a little, and if you would like 
          to learn a more about me, feel free to head to the contact section 
          or using the social icons at the bottom. 
        </p>
      </div>
    </div>
  );
}