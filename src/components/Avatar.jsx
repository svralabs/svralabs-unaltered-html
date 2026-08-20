import PropTypes from 'prop-types';

export default function Avatar({ src, alt, size = 'md', className = '', ...props }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <img
      className={`rounded-full border-2 border-border-color ${sizes[size]} ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
