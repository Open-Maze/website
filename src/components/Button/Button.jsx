import React from 'react';
import './Button.scss';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
