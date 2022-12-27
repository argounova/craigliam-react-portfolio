import React from 'react';
import '../../assets/styles/Work.css';
import Screenshot1 from '../../assets/images/weather-dashboard.png';
import Screenshot2 from '../../assets/images/mtg.jpg';
import Screenshot3 from '../../assets/images/speakeasy.jpg';
import Screenshot4 from '../../assets/images/password-generator.jpg';
import Screenshot5 from '../../assets/images/coding-quiz.jpg';
import Screenshot6 from '../../assets/images/work-day-scheduler.jpg';


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
                <a href="https://argounova.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                <img src={Screenshot1} style={style.sizeL} alt="weather-dashboard" /></a>
                <a href="https://github.com/argounova/weather-dashboard" target="_blank" rel="noreferrer">
                Weather Dashboard Repository</a>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://peaceful-escarpment-11973.herokuapp.com/" target="_blank" rel="noreferrer">
                <img src={Screenshot2} style={style.sizeL} alt="magic-the-gathering" /></a>
                <a href="https://github.com/HammontreeWebDev/MTGpp" target="_blank" rel="noreferrer">
                MTG: Deck Creation Repository</a>            
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://jkanvision.github.io/The-SpeakEasy-Project/" target="_blank" rel="noreferrer">
                <img src={Screenshot3} style={style.sizeL} alt="speakeasy-project" /></a>
                <a href="https://github.com/jkanvision/The-SpeakEasy-Project" target="_blank" rel="noreferrer">
                The Speakeasy Project Repository</a>            
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://argounova.github.io/code-quiz/" target="_blank" rel="noreferrer">
                <img src={Screenshot5} style={style.sizeL} alt="coding-quiz" /></a>
                <a href="https://github.com/argounova/code-quiz" target="_blank" rel="noreferrer">
                Coding Quiz Repository</a>            
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a href="https://argounova.github.io/password-generator/" target="_blank" rel="noreferrer">
                <img src={Screenshot4} style={style.sizeM} alt="password-generator-application" /></a>
                <a href="https://github.com/argounova/password-generator" target="_blank" rel="noreferrer">
                Password Generator Repository</a>            
              </div>
              <div class="col">
                <a href="https://argounova.github.io/day-planner/" target="_blank" rel="noreferrer">
                <img src={Screenshot6} style={style.sizeM} alt="day-planner" /></a>
                <a href="https://github.com/argounova/day-planner" target="_blank" rel="noreferrer">
                Work Day Planner Repository</a>            
              </div>
            </div>
          </div>
      </div>
</section>
  );
}
