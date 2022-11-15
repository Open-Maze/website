import { React, useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';

const initialState = {
  name: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
};

function signupUser() {
  axios({
    method: 'POST',
    url: '/contact-form.php',
    data: { ...initialState },
  }).then((response) => {
    if (response.data.status === 'success') {
      alert('Message Sent.');
      this.resetForm();
    } else if (response.data.status === 'fail') {
      alert('Message failed to send.');
    }
  });
}

const ContactForm = () => {
  const [{ name, companyName, email, phone, message }, setState] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser();
    clearState();
  };

  return (
    <div className="App">
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <Input
            label=""
            handleChange={onChange}
            value={name}
            placeholder="Voor- en achternaam"
            outline=""
            white
            fullwidth=""
            inputType=""
          />
          <input
            placeholder="Voor- en achternaam*"
            type="text"
            className="form-control"
            id="naam"
            value={name}
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Bedrijfsnaam"
            type="text"
            className="form-control"
            id="bedrijfsnaam"
            aria-describedby="companyHelp"
            value={companyName}
            name="companyName"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="E-mail*"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Telefoon"
            type="phone"
            className="form-control"
            id="telefoon"
            aria-describedby="telefoonHelp"
            value={phone}
            name="phone"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Bericht"
            className="form-control"
            rows="5"
            id="bericht"
            value={message}
            name="message"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
