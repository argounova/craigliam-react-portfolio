import React from 'react';
import '../../styles/About.css';
import Image from '../../images/my-profile-photo.jpg';


export default function About() {
  return (
    <div class="contentDiv">
      <h1>Craig Putzstuck</h1>
      <h3>WEB DEVELOPER</h3>
      <div className="wrapText">
        <div>
          <img src={Image} alt="Profile Picture"/>
        </div>
          <p>
           Welcome and thanks for stopping by! Here you will find examples of my most recent work, but first, allow me to introduce myself. I am a full stack JavaScript web developer and simply put, I build web applications. When I'm not in front of the computer, you can typically find me in the garage trying to make one of my cars shinier or faster than it was the day before. I have an unbridled passion for motorsports and in my second life I am actively pursuing an amateur racing career.
          <br/>
           Cars and computers go hand in hand these days and in the not-so-distant-future, cars will be computers. As a developer with a wealth of automotive knowledge, I seek to position myself at the forefront of such an intersection. I hope to work with innovative, free-thinking, dedicated and diverse individuals who hold progress and global awareness as some of their core values. Ready to get started? I'd love to hear from you.
          </p>
      </div>
    </div>
  );
}
