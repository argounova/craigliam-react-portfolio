import React from 'react';
import '../../styles/Inquire.css';

const style = {
  align: {
    paddingTop: '5%'
  }
}

export default function Inquire() {
  return (
    <div class="contentDiv" style={style.align}>
      <div class="contactCard">
        <h1>Contact Me</h1>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Your Name</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Your Email</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group">
          <span class="input-group-text">Your Message</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <button type="button" class="btn btn-light">Submit</button>
      </div>
    </div>
  );
}