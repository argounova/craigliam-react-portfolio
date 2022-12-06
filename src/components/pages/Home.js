import React from 'react';
import '../../styles/Home.css';
import Image from '../../images/my-profile-photo.jpg';

const style = {
  card: {
    background: 'linear-gradient(90deg, rgba(0,0,0,0.97) 0%, rgba(10,56,115,1) 68%, rgba(8,12,38,0.97) 100%)',
    border: '#0A3873 solid 3px',
    width: '50%',
    marginTop: '2%',
    marginLeft: '2%',
    padding: '0.5%'
  }
};

export default function Home() {
  return (
    <div style={style.card}>
      <h1>Craig Putzstuck</h1>
      <h3>WEB DEVELOPER</h3>
      <div class="wrapText">
        <div>
          <img src={Image} alt="Profile Picture"/>
        </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
            ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
            non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
            ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
            rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
            tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
            porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
            vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
      </div>
    </div>
  );
}
