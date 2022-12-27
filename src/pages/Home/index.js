import React from 'react';
import '../../assets/styles/Home.css';
import Image from '../../assets/images/my-profile-photo.jpg';

const style = {
  card: {
    background: 'rgb(0,0,0,0.9)',
    // background: 'linear-gradient(90deg, rgba(0,0,0,1) 3%, rgba(44,22,89,1) 58%, rgba(0,0,0,1) 98%)',
    width: '50%',
    height: 'fit-content',
    marginLeft: '5%',
    padding: '0.5%'
  },
  minHeight: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
};

export default function Home() {
  return (
    <section>
      <div style={style.minHeight}>
      <div style={style.card}>
        <h1>Craig Putzstuck</h1>
        <h3>WEB DEVELOPER</h3>
        <div className="wrapText">
          <div>
            <img src={Image} alt="Profile Picture"/>
          </div>
            <p>
            Welcome and thanks for stopping by! Here you will find examples of my most recent work, but first, allow me to introduce myself. I am a full stack JavaScript web developer and simply put, I build web applications. Currently enrolled in an in-depth MERN bootcamp at the University of Central Florida, I've been supremely focused on advancing my understanding of everything from HTML and CSS to MongoDB, Apollo and mySQL. 
            <br/>
            <br/>
            Originally from Colorado, I currently live off the western coast of Florida about an hour north of Tampa Bay. My partner and I enjoy exploring Florida, cooking and spending time with our pets. When I'm not in front of the computer, you can typically find me in the garage tinkering with one of my cars. I have a passion for motorsports and enjoy NASA track days at Sebring as often as time allows.
            </p>
        </div>
      </div>
      </div>
    </section>
  );
}
