import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './style.css';
import Screenshot1 from '../../assets/images/weather-dashboard-ss.png';
import Screenshot2 from '../../assets/images/mtg-ss.png';
import Screenshot6 from '../../assets/images/outta-touch-ss.png';

function Work() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div id='work' className='work-section'>
      <Row 
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='work-row p-0 g-0'
      >
        <Col className='d-flex' md={8}>
          <a href='https://outta-touch.herokuapp.com/' target='_blank' rel='noreferrer'>
            <img
              className='w-100'
              src={Screenshot6}
              alt='Outta Touch App'
            />
          </a>
        </Col>
        <Col>
        <Stack className='d-flex align-items-center'>
            <h1>Outta Touch Instant Messenger</h1>
            <p>Description</p>
            <ul>
              <li>technology used</li>
              <li>technology used</li>
              <li>technology used</li>
              <li>technology used</li>
            </ul>
          <a href='https://github.com/argounova/outta-touch' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
            <h2 style={{ color: '#000' }}>View GitHub Repository</h2>
          </a>
        </Stack>
        </Col>
      </Row>
      <Row
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='work-row p-0 g-0 flex-column-reverse'  
      >    
        <Col>
          <Stack className='d-flex align-items-center'>
            <h1>Weather Dashboard</h1>
            <p>Description</p>
            <ul>
              <li>technology used</li>
              <li>technology used</li>
              <li>technology used</li>
              <li>technology used</li>
            </ul>
            <a href="https://github.com/argounova/weather-dashboard" target="_blank" rel="noreferrer" style={{ textDecorationLine: 'none' }}>
            <h2 style={{ color: '#000'}}>View GitHub Repository</h2>
            </a>
          </Stack>
        </Col>
        <Col className='d-flex' md={8}>
          <a href="https://argounova.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
            <img
              className='w-100'
              src={Screenshot1}
              alt='Weather Dashboard'
            />
          </a>
        </Col>
      </Row>
      <Row
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='work-row p-0 g-0'
      >
        <Col className='d-flex' md={8}>
          <a href="https://peaceful-escarpment-11973.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              className='w-100'
              src={Screenshot2}
              alt='Magic the Gathering Deck Creation'
            />
          </a>
        </Col>
        <Col>
        <Stack className='d-flex align-items-center'>
            <h1>Magic: the Gathering Deck Creation</h1>
            <p>Description</p>
            <ul>
              <li>technology used</li>
              <li>technology used</li>
              <li>technology used</li>
              <li>technology used</li>
            </ul>
        <a href='https://github.com/HammontreeWebDev/MTGpp' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
              <h2 style={{ color: '#000'}}>View GitHub Repository</h2>
            </a>
          </Stack>
        </Col>
      </Row>
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
