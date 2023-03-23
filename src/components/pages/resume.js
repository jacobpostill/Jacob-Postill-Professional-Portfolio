import React from 'react';

function ResumeDownload() {
  const downloadResume = () => {
    const resumeUrl = '';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'JacobPostill_Resume.pdf');
    link.click();
  };

  return (
    <div>
      <h1>Download Jacob Postill's Resume</h1>
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
}

export default ResumeDownload;
