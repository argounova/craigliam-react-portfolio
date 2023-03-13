import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/styles/Home.css';

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <section className='overlay'>
            <div className="wrapText">
              <p className='largeHeading'>CRAIG PUTZSTUCK</p>
              <p className='smallHeading'>FRONT END DESIGNER and FULL STACK DEVELOPER</p>
            </div>
      </section>
      <div 
        className='fade-in-div' 
        data-aos='fade-in'
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >FADE IN</div>
    </>
  );
}
