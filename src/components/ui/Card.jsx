import React from 'react';
import styles from './Card.module.css';

export default function Card({ children, variant = 'default', className = '', ...props }) {
  const cardClasses = [
    styles.card,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}
