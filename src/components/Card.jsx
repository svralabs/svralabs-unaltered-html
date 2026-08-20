import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md ${className}`}>
      {children}
    </div>
  );
}
