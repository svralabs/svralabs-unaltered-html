import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with primary and secondary variants
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant ('primary' or 'secondary')
 * @param {string} props.size - Button size ('sm', 'md', 'lg')
 * @param {string} props.text - Button text
 * @param {string} props.icon - Icon name (optional)
 * @param {boolean} props.disabled - Disabled state
 * @param {function} props.onClick - Click handler
 * @returns {JSX.Element} Button component
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  text,
  icon,
  disabled = false,
  onClick,
}) {
  const baseClasses = 'font-bold rounded-full flex items-center justify-center transition-all';
  const variantClasses = {
    primary: 'bg-[#C4F82A] text-black hover:scale-[1.02] active:scale-95',
    secondary: 'border border-neutral-700 text-white hover:bg-neutral-800 active:scale-95',
  };
  const sizeClasses = {
    sm: 'py-2 px-4 text-xs',
    md: 'py-4 px-8 text-xs',
    lg: 'py-6 px-12 text-sm',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="uppercase tracking-widest">{text}</span>
      {icon && <span className="material-symbols-outlined ml-2">{icon}</span>}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
