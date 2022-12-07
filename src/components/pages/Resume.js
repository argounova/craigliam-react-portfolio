import React from 'react';
import '../../styles/Resume.css';
import pdf from '../../assets/current-resume.pdf';


export default function Resume() {
  return (
    <div class="contentDiv">
      <h1>Resume</h1>
        <div id="resume">
            <embed src={pdf} type="application/pdf"/>
        </div>
    </div>
  );
}
