import React from 'react';
import '../../styles/About.css';
import Image from '../../images/my-profile-photo.jpg';

const style = {
  para: {
    padding: '2%'
  }
};

export default function About() {
  return (
    <section>
      <div class="contentDiv">
        <h1>Craig Putzstuck</h1>
        <h3>MERN FULL STACK WEB DEVELOPER</h3>
        <div className="wrapText">
          <div>
            <img src={Image} style={style.para}/>
          </div>
            <p style={style.para}>
              I have always maintained a curious mind and a desire to see projects through to fruition. While cars and racing have held my interests hostage for the most part, architecture, 3D modeling and wood working have also held sway. It was somewhat natural then to transition into web development as technology progressed and the realization that the architecture of the future lies in code. As an analytical individual planning and design are ingrained in my DNA which has allowed JavaScript to become a very rewarding aspect of my life.
            <br/>
            <br/>
              My overall focus is on the MERN stack, however, there are several supporting technologies that have really garnered my attention. Handlebars.js, Bootstrap, jQuery, third-party API's and Apollo GraphQL to name a few. Understanding the intersection of front-end and back-end development has proven to be fascinating and although tedious and challenging at times (most times if I'm honest!) is absolutely integral to a proper web application. 
            <br/>
            <br/>
              As mentioned previously, motorsport is a serious component to my life. It is something I have been around for as long as I can remember. With age I gain a greater appreciation for the history surrounding racing and for the inumerous individuals that have made it what it is today. Technology also plays an undeniable and all-consuming role in motorsport as racecars move towards sustainable fuels and electric power. In the not-so-distant-future, cars will be computers. As a developer with a wealth of automotive knowledge, I seek to position myself at the forefront of such an intersection. I hope to work with innovative, free-thinking, dedicated and diverse individuals who hold progress and global awareness as some of their core values. Ready to get started? I'd love to hear from you.
            </p>
          </div>
        </div>
      <footer>
          <ul>
              <li><a href="mailto:putzstuck@gmail.com">Email Me</a></li>
              <li><a href="https://github.com/argounova" target="_blank">GitHub</a></li>
              <li><a href="https://www.facebook.com/craig.putzstuck.5" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com/CraigPutzstuck" target="_blank">Twitter</a></li>
              <li><a href="https://www.instagram.com/mx5craig/" target="_blank">Instagram</a></li>
          </ul>
      </footer>
    </section>
  );
}
