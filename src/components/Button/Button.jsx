import React from 'react';
import './Button.scss';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className }) => (
  <motion.button
    whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.7 }}
    onClick={onClick}
    type="button"
    className={className}
  >
    {children}
  </motion.button>
);

export default Button;
