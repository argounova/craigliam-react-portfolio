import React from 'react';
import '../../assets/styles/Home.css';
import Image from '../../assets/images/my-profile-photo-bw.jpg';

export default function Home() {
  return (
    <section className='homeOverlay'>
      <div style={{ paddingLeft:'1%', paddingTop: '3%' }}>
        <h1>Craig Putzstuck</h1>
        <h3>WEB DEVELOPER</h3>
        <div className="wrapText">
            <p>
            Welcome and thanks for stopping by! Here you will find examples of my most recent work, but first, allow me to introduce myself. I am a full stack JavaScript web developer and simply put, I build web applications. Armed with immersive bootcamp training from the University of Central Florida, I've been supremely focused on advancing my understanding of everything from HTML and CSS to mySQL, MongoDB, and React, just to name a few. 
            <div>
              <img src={Image} alt="profile"/>
            </div>
            Originally from Colorado, I currently live off the western coast of Florida about an hour north of Tampa Bay. My partner and I enjoy exploring Florida, cooking and spending time with our pets. When I'm not in front of the computer, you can typically find me in the garage tinkering with one of my cars. I have a passion for Motorsport and enjoy NASA track days at Sebring as often as time allows. I seek to help advance the industry through code and software development.
            </p>
        </div>
      </div>
    </section>
  );
}
