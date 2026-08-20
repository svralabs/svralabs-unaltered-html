import PropTypes from 'prop-types';

export default function Badge({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-secondary-container text-on-secondary-container',
    orange: 'bg-orange text-white',
  };

  return (
    <span
      className={`font-label-caps text-[10px] px-sm py-xs rounded-full uppercase ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'orange']),
  className: PropTypes.string,
};
