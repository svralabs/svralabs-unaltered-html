import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', onClick }) {
  const baseClasses = 'font-headline-md py-sm rounded-xl uppercase tracking-wider';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    outline: 'border-2 border-primary text-primary',
  };
  const sizeClasses = {
    sm: 'px-md py-xs text-sm',
    md: 'px-lg py-sm text-md',
    lg: 'px-xl py-md text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
