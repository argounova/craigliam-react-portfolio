import React, { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import emailjs from '@emailjs/browser';
import './style.css';
import { validateEmail } from '../../utils/helpers';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

    // alert(`Thanks for reaching out ${formName}! Please allow 1-2 business days for a response.`);
    handleShow();
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className='inquire-section'>

      <Modal
        show={show} 
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for contacting me.  Please allow 1-2 business days for a response.</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

          <h3>Inquire</h3>
          <form id='inquire' className="contactCard form" ref={form}>
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
      <HashLink
      to='#'
      style={{ 
        color: '#03A6A6',
        fontSize: '20px'
      }}
      >
      TOP
      </HashLink>
    </div>
  );
}

export default Inquire;