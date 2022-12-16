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
  const [{ fullName, companyName, email, phone, message }, setData] = useState(initialState);

  function sendMessage() {
    const API_PATH = '/api/contact/index.php';
    axios({
      method: 'POST',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { fullName, companyName, email, phone, message },
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
    sendMessage();
    clearState();
  };

  return (
    <div className="cms-block flex h-fit items-center">
      <div className="container grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="col-span-5 lg:col-start-1">
          <h4 className="pb-2 text-dark" data-aos="fade-up">
            Questions?
          </h4>
          <h2 className="pb-6" data-aos="fade-up" data-aos-delay="100">
            Send us a message
          </h2>
          <p className="pb-10 text-slate-700" data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing enterdum. Lorem ipsum dolor sit amet, consectetur a
          </p>
        </div>
        <form
          id="contact-form"
          className="form-group col-span-6 flex flex-col gap-3 lg:col-end-13"
          onSubmit={handleSubmit}
          method="POST"
        >
          {[
            ['fullName', fullName, 'Voor- en achternaam*', 'text'],
            ['companyName', companyName, 'bedrijfsnaam', 'text'],
            ['email', email, 'E-mail*', 'email'],
            ['phone', phone, 'Telefoon', 'phone'],
          ].map(([label, iValue, placeholder, type]) => (
            <div className="form-group flex flex-col">
              <input
                className="form-control h-12 rounded-lg py-2.5 px-5"
                placeholder={placeholder}
                type={type}
                id={label}
                value={iValue}
                name={label}
                onChange={onChange}
              />
            </div>
          ))}
          <div className="form-group flex flex-col">
            <textarea
              placeholder="Bericht"
              className="form-control rounded-lg py-2.5 px-5"
              rows="5"
              id="bericht"
              value={message}
              name="message"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn button button--violet">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
