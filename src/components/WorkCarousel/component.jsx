import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import Screenshot1 from '../../assets/images/weather-dashboard-ss.png';
import Screenshot2 from '../../assets/images/mtg-ss.png';
import Screenshot3 from '../../assets/images/speakeasy-ss.png';
import Screenshot4 from '../../assets/images/password-generator-ss.png';
import Screenshot5 from '../../assets/images/day-planner-ss.png';
import Screenshot6 from '../../assets/images/outta-touch-ss.png';

function Work() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div 
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className='work-section'>
      <Carousel
        id='work' 
        fade
        style={{ borderTop: 'solid #000 5px' }}
      >
        <Carousel.Item>
          <a href='https://outta-touch.herokuapp.com/' target='_blank' rel='noreferrer'>
            <img
              className='d-block w-100'
              src={Screenshot6}
              alt='First slide - Outta Touch App'
            />
          </a>
          <Carousel.Caption>
            <a href='https://github.com/argounova/outta-touch' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
              <h2 style={{ color: '#04BFAD' }}>View GitHub Repository</h2>
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
              <h2 style={{ color: '#04BFAD' }}>View GitHub Repository</h2>
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
              <h2 style={{ color: '#04BFAD'}}>View GitHub Repository</h2>
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
              <h2 style={{ color: '#04BFAD'}}>View GitHub Repository</h2>
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
              <h2 style={{ color: '#04BFAD'}}>View GitHub Repository</h2>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://argounova.github.io/day-planner/' target='_blank' rel='noreferrer'>
            <img
              className='d-block w-100'
              src={Screenshot5}
              alt='Sixth slide - Day Planner'
            />
          </a>
          <Carousel.Caption>
            <a href='https://github.com/argounova/day-planner' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
              <h2 style={{ color: '#04BFAD'}}>View GitHub Repository</h2>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HashLink
      to='#'
      style={{ 
        color: '#03A6A6',
        fontSize: '20px'
      }}
      >
      TOP
      </HashLink>
    </div>
  );
}

export default Work;
