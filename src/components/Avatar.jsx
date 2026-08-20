import React from 'react';

export default function Avatar({ src, alt, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <img
      className={`${sizeClasses[size]} rounded-full border-2 border-border-color`}
      src={src}
      alt={alt}
    />
  );
}
