import React from 'react';
import '../../assets/styles/Resume.css';
import resume from '../../assets/docs/current-resume.pdf';



export default function Resume() {


  return (
    <section>
      <div className="overlay">
        <h1>Resume</h1>
          <div className='pdfDiv'>
            <embed
              src={resume}
              width='100%'
              height='100%'
              type='application/pdf'
              aria-label='resume'
            />
          </div>
      </div>
    </section>
  );
}
