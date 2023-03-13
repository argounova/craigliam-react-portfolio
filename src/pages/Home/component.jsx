import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

// Components
import Work from '../../components/Work/component';
import About from '../../components/About/component';
import Inquire from '../../components/Inquire/component';
import Navigation from '../../components/Navbar/component';

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className='wrapText'>
        <div className='custom-backdrop'>
          <Navigation />
          <p className='largeHeading'>CRAIG PUTZSTUCK</p>
          <p className='smallHeading'>front end design & full stack development</p>
        </div>
      </div>
      <Work />
      <About />
      <Inquire />
    </>
  );
}
