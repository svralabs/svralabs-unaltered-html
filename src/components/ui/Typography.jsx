import React from 'react';
import styles from './Typography.module.css';

export default function Typography({ children, variant = 'body', className = '', ...props }) {
  const typographyClasses = [
    styles.typography,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={typographyClasses} {...props}>
      {children}
    </p>
  );
}
