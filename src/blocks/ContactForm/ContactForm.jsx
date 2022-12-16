/* eslint-disable no-shadow */
import React, { useState } from 'react';

// External
import axios from 'axios';

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  message: '',
  fullNameError: '',
  companyNameError: '',
  emailError: '',
  phoneError: '',
  messageError: '',
};

const ContactForm = ({ subtitle, title, text }) => {
  const [
    {
      fullName,
      companyName,
      email,
      phone,
      message,
      fullNameError,
      companyNameError,
      emailError,
      phoneError,
      messageError,
    },
    setData,
  ] = useState(initialState);

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

  const validate = () => {
    let fullNameError = '';
    let companyNameError = '';
    let emailError = '';
    let phoneError = '';
    let messageError = '';

    if (!fullName) {
      fullNameError = 'Full name is required';
    }

    if (!companyName) {
      companyNameError = 'Company name is required';
    }

    if (!email) {
      emailError = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      emailError = 'Invalid email address';
    }

    if (!phone) {
      phoneError = 'Phone is required';
    }

    if (!message) {
      messageError = 'Message is required';
    }

    if (fullNameError || companyNameError || emailError || phoneError || messageError) {
      setData((prevState) => ({
        ...prevState,
        fullNameError,
        companyNameError,
        emailError,
        phoneError,
        messageError,
      }));
      return false;
    }

    return true;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      sendMessage();
      clearState();
    }
  };

  return (
    <section className="cms-block flex h-fit items-center">
      <div
        className="container grid grid-cols-1 items-start gap-10 lg:grid-cols-12"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="col-span-5 lg:col-start-1">
          {subtitle && <h4 className="pb-2 text-dark">{subtitle}</h4>}
          {title && <h2 className="pb-6">{title}</h2>}
          {text && <p className="text-slate-700">{text}</p>}
        </div>
        <form
          id="contact-form"
          className="form-group col-span-6 flex flex-col gap-3 lg:col-end-13"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="form-group flex flex-col">
            <input
              className="form-control h-12 rounded-lg py-2.5 px-5"
              placeholder="Your name"
              type="text"
              id="fullName"
              value={fullName}
              name="fullName"
              onChange={onChange}
            />
            {fullNameError && <div className="text-red-600">{fullNameError}</div>}
          </div>
          <div className="form-group flex flex-col">
            <input
              className="form-control h-12 rounded-lg py-2.5 px-5"
              placeholder="Company name"
              type="text"
              id="companyName"
              value={companyName}
              name="companyName"
              onChange={onChange}
            />
            {companyNameError && <div className="text-red-600">{companyNameError}</div>}
          </div>
          <div className="form-group flex flex-row gap-3">
            <div className="w-full">
              <input
                className="form-control h-12 w-full rounded-lg px-5 py-2.5"
                placeholder="E-mail"
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={onChange}
              />
              {emailError && <div className="text-red-600">{emailError}</div>}
            </div>
            <div className="w-full">
              <input
                className="form-control h-12 w-full rounded-lg py-2.5 px-5"
                placeholder="Phone"
                type="phone"
                id="phone"
                value={phone}
                name="phone"
                onChange={onChange}
              />
              {phoneError && <div className="text-red-600">{phoneError}</div>}
            </div>
          </div>
          <div className="form-group flex flex-col">
            <textarea
              placeholder="Message"
              className="form-control rounded-lg py-2.5 px-5"
              rows="5"
              id="bericht"
              value={message}
              name="message"
              onChange={onChange}
            />
            {messageError && <div className="text-red-600">{messageError}</div>}
          </div>
          <button type="submit" className="btn button button--skyline w-28">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
