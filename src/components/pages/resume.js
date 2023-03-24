import React from 'react';

function ResumeDownload() {
  const downloadResume = () => {
    const resumeFile = 'file:///C:/Users/Owner/Downloads/Jacob%20Postill%20Resume%20Nov%202022-1%20copy%202%20(1).pdf';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([resumeFile], { type: 'application/pdf' }));
    link.setAttribute('download', 'JacobPostill_Resume.pdf');
    link.click();
  };

  const skills = ['JavaScript', 'React', 'HTML', 'CSS'];

  return (
    <div>
      <h1>Jacob Postill's Resume</h1>
      <h2>Skills:</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
}

export default ResumeDownload;