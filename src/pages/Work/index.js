import React from 'react';
import '../../styles/Work.css';
import Screenshot1 from '../../assets/weather-dashboard.png';
import Screenshot2 from '../../assets/mtg.jpg';
import Screenshot3 from '../../assets/speakeasy.jpg';
import Screenshot4 from '../../assets/password-generator.jpg';
import Screenshot5 from '../../assets/coding-quiz.jpg';
import Screenshot6 from '../../assets/work-day-scheduler.jpg';


const style = {
  sizeL: {
    maxWidth: '1000px',
  },
  sizeM: {
    maxWidth: '600px',
  },
  sizeS: {
    maxWidth: '400px',
  },
}

export default function Work() {
  return (
    <section>
      <div class="contentDiv">
        <h1>Recent Projects</h1>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <a href="https://argounova.github.io/weather-dashboard/" target="_blank">
                <img src={Screenshot1} style={style.sizeL}/></a>
                <a href="https://github.com/argounova/weather-dashboard" target="_blank">
                Weather Dashboard Repository</a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://peaceful-escarpment-11973.herokuapp.com/" target="_blank">
                <img src={Screenshot2} style={style.sizeL}/></a>
                <a href="https://github.com/HammontreeWebDev/MTGpp" target="_blank">
                MTG: Deck Creation Repository</a>            
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://jkanvision.github.io/The-SpeakEasy-Project/" target="_blank">
                <img src={Screenshot3} style={style.sizeL}/></a>
                <a href="https://github.com/jkanvision/The-SpeakEasy-Project" target="_blank">
                The Speakeasy Project Repository</a>            
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://argounova.github.io/code-quiz/" target="_blank">
                <img src={Screenshot5} style={style.sizeL}/></a>
                <a href="https://github.com/argounova/code-quiz" target="_blank">
                Coding Quiz Repository</a>            
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://argounova.github.io/password-generator/" target="_blank">
                <img src={Screenshot4} style={style.sizeM}/></a>
                <a href="https://github.com/argounova/password-generator" target="_blank">
                Password Generator Repository</a>            
              </div>
              <div class="col">
                <a href="https://argounova.github.io/day-planner/" target="_blank">
                <img src={Screenshot6} style={style.sizeM}/></a>
                <a href="https://github.com/argounova/day-planner" target="_blank">
                Work Day Planner Repository</a>            
              </div>
            </div>
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
