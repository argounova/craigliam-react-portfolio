import React from 'react';
import '../../assets/styles/Resume.css';
import pdf from '../../assets/docs/current-resume.pdf';


export default function Resume() {
  return (
    <section>
      <div class="contentDiv">
        <h1>Resume</h1>
          <div id="resume">
              <embed src={pdf} type="application/pdf"/>
          </div>
      </div>
    </section>
  );
}
