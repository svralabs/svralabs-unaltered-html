import PropTypes from 'prop-types';

export default function ProgressBar({ value, max = 100, className = '', ...props }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full bg-surface-variant rounded-full h-4 ${className}`} {...props}>
      <div
        className="bg-primary h-4 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  className: PropTypes.string,
};
