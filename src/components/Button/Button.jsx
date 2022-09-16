import React from 'react';
import './Button.css';

// External
import { motion } from 'framer-motion/dist/framer-motion';

const Button = ({ children, pageUrl, className }) => {
  let url = pageUrl;
  if (url === '') {
    url = '#';
  } else {
    url = pageUrl;
  }

  return (
    <a href={url}>
      <motion.button whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }} type="button" className={className}>
        {children}
      </motion.button>
    </a>
  );
};

export default Button;
