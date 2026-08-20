import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component with title and content
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle (optional)
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional class names
 * @returns {JSX.Element} Card component
 */
export default function Card({ title, subtitle, children, className = '' }) {
  return (
    <div className={`bg-surface-container-high border border-outline-variant rounded-bento p-padding ${className}`}>
      {title && (
        <div className="mb-8">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] block">
            {title}
          </span>
          {subtitle && <p className="text-neutral-500 mt-2">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
