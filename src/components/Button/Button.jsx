import React from 'react';
import './Button.scss';

export const Button = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
