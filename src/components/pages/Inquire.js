import React, { useState } from 'react';
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

  const handleFormChange = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;

    if (formType === 'formName') {
      setFormName(formValue);
    } else if (formType === 'formEmail') {
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

    alert(`Thanks for reaching out ${formName}! Please allow 1-2 business days for a response.`);
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  return (
    <section>
      <div class="contentDiv" style={style.align}>
        <div class="contactCard">
          <h1>Contact Me</h1>
          <form className="form">
            <input
              value={formName}
              name="formName"
              onChange={handleFormChange}
              type="text"
              placeholder="Name"
            />
            <input
              value={formEmail}
              name="formEmail"
              onChange={handleFormChange}
              type="email"
              placeholder="Email"
            />
            <input
              value={formMessage}
              name="formMessage"
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