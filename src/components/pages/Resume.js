import React from 'react';
import '../../styles/Resume.css';
import pdf from '../../assets/current-resume.pdf';


export default function Resume() {
  return (
    <section>
      <div class="contentDiv">
        <h1>Resume</h1>
          <div id="resume">
              <embed src={pdf} type="application/pdf"/>
          </div>
      </div>
        <footer>
          <ul>
            <li><a href="mailto:putzstuck@gmail.com">Email Me</a></li>
            <li><a href="https://github.com/argounova" target="_blank">GitHub</a></li>
            <li><a href="https://www.facebook.com/craig.putzstuck.5" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/CraigPutzstuck" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/mx5craig/" target="_blank">Instagram</a></li>
          </ul>
        </footer>
    </section>
  );
}
