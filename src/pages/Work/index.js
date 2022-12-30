import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/styles/Work.css';
import Screenshot1 from '../../assets/images/weather-dashboard.png';
import Screenshot2 from '../../assets/images/mtg.jpg';
import Screenshot3 from '../../assets/images/speakeasy.jpg';
import Screenshot4 from '../../assets/images/password-generator.png';
import Screenshot6 from '../../assets/images/work-day-scheduler.jpg';
import Screenshot7 from '../../assets/images/outta-touch-ss.png';

function Work() {
  return (
    <section         
      className='contentDiv'
    >
      <div
        style={{ margin: '3% auto', width: '90%' }}
      >
        <Carousel 
          fade
          style={{ border: 'solid #000 5px' }}
        >
          <Carousel.Item>
            <a href='https://outta-touch.herokuapp.com/' target='_blank' rel='noreferrer'>
              <img
                className='d-block w-100'
                src={Screenshot7}
                alt='First slide - Outta Touch App'
              />
            </a>
            <Carousel.Caption>
              <a href='https://github.com/argounova/outta-touch' target='_blank' rel='noreferrer' style={{ textDecorationColor: '#f0f0f0', textUnderlineOffset: '5px' }}>
                <h3 style={{ color: '#f0f0f0' }}>View GitHub Repository</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://argounova.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
              <img
                className='d-block w-100'
                src={Screenshot1}
                alt='Second slide - Weather Dashboard'
              />
            </a>
            <Carousel.Caption>
              <a href="https://github.com/argounova/weather-dashboard" target="_blank" rel="noreferrer" style={{ textDecorationLine: 'none' }}>
                <h1 style={{ backgroundColor: '#000', color: '#04BFAD'}}>GitHub Repository</h1>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://peaceful-escarpment-11973.herokuapp.com/" target="_blank" rel="noreferrer">
              <img
                className='d-block w-100'
                src={Screenshot2}
                alt='Third slide - Magic the Gathering Deck Creation'
              />
            </a>
            <Carousel.Caption>
              <a href='https://github.com/HammontreeWebDev/MTGpp' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
                <h1 style={{ backgroundColor: '#000', color: '#04BFAD'}}>GitHub Repository</h1>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://argounova.github.io/password-generator/' target='_blank' rel='noreferrer'>
              <img
                className='d-block w-100'
                src={Screenshot4}
                alt='Fourth slide - Password Generator'
              />
            </a>
            <Carousel.Caption>
              <a href='https://github.com/argounova/password-generator' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
                <h1 style={{ backgroundColor: '#000', color: '#04BFAD'}}>GitHub Repository</h1>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://jkanvision.github.io/The-SpeakEasy-Project/search.html' target='_blank' rel='noreferrer'>
              <img
                className='d-block w-100'
                src={Screenshot3}
                alt='Fifth slide - The Speakeasy Project Drink API'
              />
            </a>
            <Carousel.Caption>
              <a href='https://github.com/jkanvision/The-SpeakEasy-Project' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
                <h1 style={{ backgroundColor: '#000', color: '#04BFAD'}}>GitHub Repository</h1>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://argounova.github.io/day-planner/' target='_blank' rel='noreferrer'>
              <img
                className='d-block w-100'
                src={Screenshot6}
                alt='Sixth slide - Day Planner'
              />
            </a>
            <Carousel.Caption>
              <a href='https://github.com/argounova/day-planner' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
                <h1 style={{ backgroundColor: '#000', color: '#04BFAD'}}>GitHub Repository</h1>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Work;
