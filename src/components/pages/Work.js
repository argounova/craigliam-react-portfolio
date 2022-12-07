import React from 'react';
import '../../styles/Work.css';
import Screenshot1 from '../../assets/weather-dashboard-screenshot.png';

const style = {
  sizeL: {
    maxWidth: '1000px',
  },
  sizeM: {
    maxWidth: '600px',
  },
  sizeS: {
    maxWidth: '400px',
  }
}

export default function Work() {
  return (
    <div class="contentDiv">
      <h1>Contact Page</h1>
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
              1 of 2
            </div>
            <div class="col">
              2 of 2
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              2 of 3
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
        </div>
    </div>
  );
}
