import React from 'react';
import './Button.css';

// External
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, pageUrl, className, external }) => {
  let url = pageUrl;
  if (url === '') {
    url = '#';
  } else {
    url = pageUrl;
  }

  return (
    <>
      {}
      {external ? (
        <a href={url} target="_blank" rel="noreferrer">
          <motion.button whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }} type="button" className={className}>
            {children}
          </motion.button>
        </a>
      ) : (
        <Link to={url}>
          <motion.button whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }} type="button" className={className}>
            {children}
          </motion.button>
        </Link>
      )}
    </>
  );
};

export default Button;
