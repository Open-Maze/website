import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Button = ({ children, onClick, pageUrl, className }) => {
  let url = pageUrl;
  if (url === '') {
    url = '#';
  } else {
    url = pageUrl;
  }
  return (
    <Link to={url}>
      <motion.button
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        type="button"
        className={className}
      >
        {children}
      </motion.button>
    </Link>
  );
};

export default Button;
