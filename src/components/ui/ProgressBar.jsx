import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({ value, max = 100, variant = 'primary', className = '', ...props }) {
  const progress = Math.min(100, Math.max(0, (value / max) * 100));

  const progressBarClasses = [
    styles.progressBar,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.progressBarContainer} {...props}>
      <div className={progressBarClasses} style={{ width: `${progress}%` }} />
    </div>
  );
}
