import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.css';
import Image from '../../assets/images/my-profile-photo.jpg';

export default function About() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
      <div id='about' className="about-section">
        <div className="aboutText">
          <div>
            <img 
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src={Image} 
            style={{paddingRight: '2%'}} 
            alt="profile"/>
          </div>
            <p 
            data-aos="zoom-in-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
              I have always maintained a curious mind and a desire to see projects through to fruition. While cars and racing have held my interests hostage for the most part, architecture, 3D modeling and wood working have also held sway. It was somewhat natural then to transition into web development as technology progressed and the realization that the architecture of the future lies in code. As an analytical individual planning and design are ingrained in my DNA which has allowed JavaScript to become a very rewarding aspect of my life.
            <br/>
            <br/>
              As mentioned previously, motorsport is a serious component to my life. It is something I have been around for as long as I can remember. With age I gain a greater appreciation for the history surrounding racing and for the inumerous individuals that have made it what it is today. Technology also plays an undeniable and all-consuming role in motorsport as racecars move towards sustainable fuels and electric power. In the not-so-distant-future, cars will be computers. As a developer with a wealth of automotive knowledge, I seek to position myself at the forefront of such an intersection. I hope to work with innovative, free-thinking, dedicated and diverse individuals who hold progress and global awareness as some of their core values. Ready to get started? I'd love to hear from you.
            </p>
          </div>
        </div>

  );
}
