import React from 'react';

export default function ProgressBar({ value, max = 100, color = 'primary' }) {
  const percentage = (value / max) * 100;
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    orange: 'bg-orange',
    red: 'bg-red',
  };

  return (
    <div className="w-full bg-surface-variant rounded-full h-2.5">
      <div
        className={`${colorClasses[color]} h-2.5 rounded-full`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
