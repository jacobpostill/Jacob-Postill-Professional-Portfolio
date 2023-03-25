import React from 'react';
import '../../css/resume.css';

function ResumeDownload() {
  const downloadResume = () => {
    const resumeFile = 'file:///C:/Users/Owner/Downloads/Jacob%20Postill%20Resume%20Nov%202022-1%20copy%202%20(1).pdf';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([resumeFile], { type: 'application/pdf' }));
    link.setAttribute('download', 'JacobPostill_Resume.pdf');
    link.click();
  };

const skills = ['JavaScript', 'React', 'HTML', 'CSS', "API", 'Node', 'OOP', 'Express', 'SQL, NoSql', 'ORM', 
'MCV', 'PWA', 'MERN', 'State'];

const works = ['Assistant Project Manager, Nuwelcom', 
'Sales Associate, Cumbrae’s Butchers', 
'Member, Service-Learning Program,'];

const abilities = ['AutoCAD', 'Maplesoft', 'SOLIDWORKS', 'Microsoft Office', ];

  return (
    <div className="resume-container">
      <h1>Jacob Postill's Resume</h1>
      <div className='container-left'>
      <div className='languages'>
        <h2>Languages:</h2>
        <ul>
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <div className='container-right'>
        <div className='expierence'>
          <h2>Work Expierence:</h2>
          <ul style={{ paddingLeft: '1.5rem', listStylePosition: 'outside' }}>
          {works.map(work => <li key={work}>{work}</li>)}
        </ul>
        </div>
        <div className='skills'>
          <h2>Skills:</h2>
          <ul>
          {abilities.map(abilitie => <li key={abilitie}>{abilitie}</li>)}
        </ul>
        </div>
      </div>
      </div>
      <p>For more information</p>
      <div className='resume'>
        <button className='downloadButton' onClick={downloadResume}>Download Resume</button>
      </div>
    </div>
  );
}

export default ResumeDownload;