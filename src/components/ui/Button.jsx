import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
