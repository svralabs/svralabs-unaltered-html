import React from 'react';
import styles from './Avatar.module.css';

export default function Avatar({ src, alt, size = 'md', className = '', ...props }) {
  const avatarClasses = [
    styles.avatar,
    styles[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <img
      src={src}
      alt={alt}
      className={avatarClasses}
      {...props}
    />
  );
}
