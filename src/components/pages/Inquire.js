import React from 'react';
import '../../styles/Inquire.css';


function Form() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleFormChange = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;

    if (formType === 'formName') {
      setFormName(formValue);
    } else if (inputType === 'formEmail') {
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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// const style = {
//   align: {
//     paddingTop: '5%'
//   }
// }

// export default function Inquire() {
//   return (
//     <section>
//       <div class="contentDiv" style={style.align}>
//         <div class="contactCard">
//           <h1>Contact Me</h1>
//           <div class="input-group mb-3">
//             <span class="input-group-text" id="inputGroup-sizing-default">Your Name</span>
//             <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
//           </div>
//           <div class="input-group mb-3">
//             <span class="input-group-text" id="inputGroup-sizing-default">Your Email</span>
//             <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
//           </div>
//           <div class="input-group">
//             <span class="input-group-text">Your Message</span>
//             <textarea class="form-control" aria-label="With textarea"></textarea>
//           </div>
//           <button type="button" class="btn btn-light">Submit</button>
//         </div>
//       </div>
//       <footer>
//         <ul>
//           <li><a href="mailto:putzstuck@gmail.com">Email Me</a></li>
//           <li><a href="https://github.com/argounova" target="_blank">GitHub</a></li>
//           <li><a href="https://www.facebook.com/craig.putzstuck.5" target="_blank">Facebook</a></li>
//           <li><a href="https://twitter.com/CraigPutzstuck" target="_blank">Twitter</a></li>
//           <li><a href="https://www.instagram.com/mx5craig/" target="_blank">Instagram</a></li>
//         </ul>
//       </footer>
//     </section>
//   );
// }