import React from 'react';
import PropTypes from 'prop-types';

/**
 * Badge component
 * @param {Object} props - Component props
 * @param {string} props.text - Badge text
 * @param {string} props.variant - Badge variant ('primary' or 'secondary')
 * @param {string} props.size - Badge size ('sm', 'md', 'lg')
 * @returns {JSX.Element} Badge component
 */
export default function Badge({ text, variant = 'primary', size = 'md' }) {
  const baseClasses = 'font-bold rounded-full inline-flex items-center justify-center';
  const variantClasses = {
    primary: 'bg-[#C4F82A] text-black',
    secondary: 'bg-neutral-800 text-white',
  };
  const sizeClasses = {
    sm: 'py-1 px-3 text-xs',
    md: 'py-2 px-4 text-sm',
    lg: 'py-3 px-6 text-base',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {text}
    </span>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
