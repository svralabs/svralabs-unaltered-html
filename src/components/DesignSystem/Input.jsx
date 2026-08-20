import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input component
 * @param {Object} props - Component props
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change handler
 * @param {string} props.icon - Icon name (optional)
 * @param {string} props.size - Input size ('sm', 'md', 'lg')
 * @returns {JSX.Element} Input component
 */
export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  size = 'md',
}) {
  const baseClasses = 'bg-neutral-900 border-none rounded-full focus:ring-1 focus:ring-[#C4F82A] transition-all';
  const sizeClasses = {
    sm: 'py-2 px-4 text-xs',
    md: 'py-3 px-6 text-sm',
    lg: 'py-4 px-8 text-base',
  };

  return (
    <div className="relative flex items-center">
      {icon && (
        <span className="material-symbols-outlined absolute left-3 text-neutral-500 text-sm">
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseClasses} ${sizeClasses[size]} ${icon ? 'pl-10' : ''}`}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
