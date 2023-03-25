import React from 'react';
import zodiacquestimage from '../../images/portfolio/zodiacquestimage.png';
import vacation_inspiration from '../../images/portfolio/vacation-inspiration.png';
import texteditior from '../../images/portfolio/texteditior.jpg';
import quiz_questions from '../../images/portfolio/quiz-questions-answers-1669651278.png';
import ecommerce from '../../images/portfolio/ecommerce-10.jpg';
import Password_generator from '../../images/portfolio/Password-generator.png';
import '../../css/portfolio.css';


export default function Portfolio() {
  return (
    <div className='center'>
      <div className='profolio-container'>
        <h1>Jacob's Profolio</h1>
        <p>
          Below you will find some of Jacob's favourite projects while studying at the University of Toronto Bootcamp for four months!
        </p>
        <div className='row'>

          <div className='col-12 col-md-6 display-btn'>
            <img className='project-img mx-auto d-block' src={zodiacquestimage} alt='zodiacquestimage' />
            <a href="https://github.com/jacobpostill/ZodiacQuest">
              <button className='github-btn hover-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="rgba(60, 146, 230, 1)" />
                      <stop offset="100%" stop-color="rgba(124, 0, 255, 1)" />
                    </linearGradient>
                  </defs>
                  <path fill="#000000" d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </button>
            </a>
            <a href="https://zodiacquestfinal.herokuapp.com/">
            <button className='link-btn hover-btn'>Deployed Link</button>
            </a>
            <h1 className='project-name'>Zodiac Quest</h1>
          </div>

          <div className='col-12 col-md-6 display-btn'>
            <img className='project-img mx-auto d-block' src={vacation_inspiration} alt='vacation_inspiration' />
            <a href="https://github.com/winglovecola/vacation-inspiration">
              <button className='github-btn hover-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </button>
            </a>
            <a href="https://winglovecola.github.io/vacation-inspiration">
            <button className='link-btn hover-btn'>Deployed Link</button>
            </a>
            <h1 className='project-name'>Vacation Inspiration</h1>
          </div>

          <div className='col-12 col-md-6 display-btn'>
            <img className='project-img mx-auto d-block' src={texteditior} alt='texteditior' />
            <a href="https://github.com/jacobpostill/The-Jate-Mate">
              <button className='github-btn hover-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </button>
            </a>
            <a href="https://thejatemate.herokuapp.com/">
            <button className='link-btn hover-btn'>Deployed Link</button>
            </a>
            <h1 className='project-name'>The Jate Mate</h1>
          </div>

          <div className='col-12 col-md-6 display-btn'>
            <img className='project-img mx-auto d-block' src={quiz_questions} alt='quiz_questions' />
            <a href="https://github.com/jacobpostill/Module-4-Project">
              <button className='github-btn hover-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </button>
            </a>
            <a href="https://jacobpostill.github.io/Module-4-Project/">
              <button className='link-btn hover-btn'>Deployed Link</button>
            </a>
            <h1 className='project-name'>Code Quiz</h1>
          </div>

          <div className='col-12 col-md-6 display-btn'>
            <img className='project-img mx-auto d-block' src={ecommerce} alt='ecommerce' />
            <a href="https://github.com/jacobpostill/The-Emaculate-Ecomerce">
              <button className='github-btn hover-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </button>
            </a>
            <a href='https://drive.google.com/file/d/1aAxCbzzldzMjpiJ8zH9Z9XFyl4XZDDUK/view'>
              <button className='link-btn hover-btn'>Walkthrough Video</button>
            </a>
            <h1 className='project-name'>The Emaculate Ecomerce</h1>
          </div>


          <div className='col-12 col-md-6 display-btn'>
            <img className='project-img mx-auto d-block' src={Password_generator} alt='Password_generator' />
            <a href="https://github.com/jacobpostill/The-Protected-Password-Power">
              <button className='github-btn hover-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </button>
            </a>
            <a href="https://jacobpostill.github.io/The-Protected-Password-Power/">
              <button className='link-btn hover-btn'>Deployed Link</button>
            </a>
            <h1 className='project-name'>The Protected Password Power</h1>
          </div>

        </div>
      </div>
    </div>
  );
}