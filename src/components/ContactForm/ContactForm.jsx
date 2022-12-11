import React, { useState } from 'react';

// External
import axios from 'axios';

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const [data, setData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: '',
  });

  function sendMessage() {
    const API_PATH = 'http://127.0.0.1:5173/api/contact/index.php';
    axios({
      method: 'POST',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { data },
    }).then((response) => {
      console.log(response);
      if (response.data.sent) {
        console.log('Message Sent.');
      } else if (response.data.sent === false) {
        console.log('kapot');
      }
    });
  }

  const clearState = () => {
    setData({ ...initialState });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    sendMessage();
    clearState();
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
      {[
        ['fullName', data.fullName, 'Voor- en achternaam*', 'text'],
        ['companyName', data.companyName, 'bedrijfsnaam', 'text'],
        ['email', data.email, 'E-mail*', 'email'],
        ['phone', data.phone, 'Telefoon', 'phone'],
      ].map(([label, iValue, placeholder, type]) => (
        <div className="form-group">
          <input
            placeholder={placeholder}
            type={type}
            className="form-control"
            id={label}
            value={iValue}
            name={label}
            onChange={onChange}
          />
        </div>
      ))}
      <div className="form-group">
        <textarea
          placeholder="Bericht"
          className="form-control"
          rows="5"
          id="bericht"
          value={data.message}
          name="message"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
