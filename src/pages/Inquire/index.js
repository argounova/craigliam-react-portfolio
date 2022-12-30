import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../assets/styles/Inquire.css';
import { validateEmail } from '../../utils/helpers';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
    <section>

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
    </section>
  );
}

export default Inquire;