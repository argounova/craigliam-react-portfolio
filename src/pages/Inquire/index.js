import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Inquire.css';
import { validateEmail } from '../../utils/helpers';

const style = {
  align: {
    paddingTop: '5%'
  }
}

function Inquire() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const handleFormChange = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;

    if (formType === 'from_name') {
      setFormName(formValue);
    } else if (formType === 'reply_to') {
      setFormEmail(formValue);
    } else {
      setFormMessage(formValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formEmail) || !formName) {
      setErrorMessage('Valid email and/or name required!');
      return;
    }

    emailjs.sendForm('service_peaz7nq', 'template_iuipk7c', form.current, 'ZElOBNy_cU2ZofiP0');

    alert(`Thanks for reaching out ${formName}! Please allow 1-2 business days for a response.`);

    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  return (
    <section>
      <div class="contentDiv" style={style.align}>
          <h1>Contact Me</h1>
          <form className="form" class="contactCard" ref={form}>
            <input
              value={formName}
              name="from_name"
              onChange={handleFormChange}
              type="text"
              placeholder="Name"
            />
            <input
              value={formEmail}
              name="reply_to"
              onChange={handleFormChange}
              type="email"
              placeholder="Email"
            />
            <textarea
              value={formMessage}
              name="message"
              onChange={handleFormChange}
              type="text"
              placeholder="Message"
            />
          <button type="button" class="btn btn-light" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
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

export default Inquire;