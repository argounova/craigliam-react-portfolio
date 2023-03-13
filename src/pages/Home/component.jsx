import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

// Components
import Work from '../../components/Work/component';
import About from '../../components/About/component';
import Inquire from '../../components/Inquire/component';

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
      <section className='overlay'>
        <div className="wrapText">
          <p className='largeHeading'>CRAIG PUTZSTUCK</p>
          <p className='smallHeading'>FRONT END DESIGNER and FULL STACK DEVELOPER</p>
        </div>
        <Work />
        <About />
        <Inquire />
      </section>
  );
}
