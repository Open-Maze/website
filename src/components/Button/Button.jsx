import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} type="button" className={className}>
    {children}
  </button>
);

export default Button;
