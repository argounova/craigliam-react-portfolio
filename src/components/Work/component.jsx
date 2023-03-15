import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './style.css';
import Screenshot1 from '../../assets/images/weather-dashboard-ss.png';
import Screenshot2 from '../../assets/images/mtg-ss.png';
import Screenshot6 from '../../assets/images/outta-touch-ss.png';
import { GiWrench } from "react-icons/gi";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function Work() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div id='work' className='work-section'>
      <Row 
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='work-row p-0 g-0'
      >
        <Col className='d-flex' md={8}>
          <a href='https://outta-touch.herokuapp.com/' target='_blank' rel='noreferrer'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={Screenshot6}
              alt='Outta Touch App'
            />
          </a>
        </Col>
        <Col>
        <Stack className='stack-description'>
            <h1>Outta Touch</h1>
            <AiOutlineDeploymentUnit className='stack-description-icon'/>
            <p className='stack-description-status'>Status: DEPLOYED</p>
            <p className='stack-description-status-sub'>(Click on image to view live application)</p>
            <h3>Instant Messaging Application</h3>
            <p className='stack-description-desc'>Highlighted by a retro 90's livery, this locally installable application utilizes web socket technology to create a real time messenger service.</p>
            <ul>
              <li><i><GiWrench /></i>React front-end</li>
              <li><i><GiWrench /></i>Apollo server</li>
              <li><i><GiWrench /></i>GraphQL</li>
              <li><i><GiWrench /></i>MongoDB database</li>
            </ul>
            <p className='stack-description-desc'>Other features include the ability to create an account, login and set up various chat rooms as well as invite other users.</p>
          <a href='https://github.com/argounova/outta-touch' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
            <h2>View on GitHub</h2>
          </a>
        </Stack>
        </Col>
      </Row>
      <Row
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='work-row p-0 g-0'
        id='reverseRow'  
      >    
        <Col>
        <Stack className='stack-description'>
            <h1>Weather Dashboard</h1>
            <AiOutlineDeploymentUnit className='stack-description-icon'/>
            <p className='stack-description-status'>Status: DEPLOYED</p>
            <p className='stack-description-status-sub'>(Click on image to view live application)</p>
            <h3>5-Day Weather Forecast</h3>
            <p className='stack-description-desc'>Sourcing its data via the OpenWeather API, this 5-day forecast app allows multiple searches and real-time data.</p>
            <ul>
              <li><i><GiWrench /></i>OpenWeather 3rd-party API</li>
              <li><i><GiWrench /></i>Client-side storage</li>
              <li><i><GiWrench /></i>Responsive</li>
              <li><i><GiWrench /></i>Bootstrap framework</li>
            </ul>
            <p className='stack-description-desc'>Recent searches are saved in the browser and users can search by city name or zip code.</p>
            <a href="https://github.com/argounova/weather-dashboard" target="_blank" rel="noreferrer" style={{ textDecorationLine: 'none' }}>
            <h2>View on GitHub</h2>
            </a>
          </Stack>
        </Col>
        <Col className='d-flex' md={8}>
          <a href="https://argounova.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
            <img
              style={{ width: '100%', height: '100%' }}
              src={Screenshot1}
              alt='Weather Dashboard'
            />
          </a>
        </Col>
      </Row>
      <Row
        data-aos="zoom-in-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='work-row p-0 g-0'
      >
        <Col className='d-flex' md={8}>
          <a href="https://peaceful-escarpment-11973.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              style={{ width: '100%', height: '100%' }}
              src={Screenshot2}
              alt='Magic the Gathering Deck Creation'
            />
          </a>
        </Col>
        <Col>
        <Stack className='stack-description'>
            <h1>Magic: the Gathering</h1>
            <AiOutlineDeploymentUnit className='stack-description-icon'/>
            <p className='stack-description-status'>Status: DEPLOYED</p>
            <p className='stack-description-status-sub'>(Click on image to view live application)</p>
            <h3>Deck List Creation</h3>
            <p className='stack-description-desc'>Create an account, login, and start building multiple decks from a daily-updated SDK.  Save, edit, and delete as many decks as you wish.</p>
            <ul>
              <li><i><GiWrench /></i>Full CRUD operations</li>
              <li><i><GiWrench /></i>MySQL database</li>
              <li><i><GiWrench /></i>JWT Authentication</li>
              <li><i><GiWrench /></i>Handlebars front end</li>
            </ul>
            <p className='stack-description-desc'>The Scryfall SDK is the real star here.  This web application also boasts auto-complete and dynamic element creation.</p>
        <a href='https://github.com/HammontreeWebDev/MTGpp' target='_blank' rel='noreferrer' style={{ textDecorationLine: 'none' }}>
              <h2>View on GitHub</h2>
            </a>
          </Stack>
        </Col>
      </Row>
    </div>
  );
}

export default Work;
