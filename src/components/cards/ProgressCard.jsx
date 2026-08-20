import React from 'react';

export default function ProgressCard({ title, progress, icon, color }) {
  return (
    <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md">
      <div className="flex items-center gap-md">
        <div className={`flex items-center justify-center h-12 w-12 rounded-full ${color}`}>
          <span className="material-symbols-outlined text-white">{icon}</span>
        </div>
        <h4 className="font-headline-md text-headline-md text-on-surface">{title}</h4>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-4">
        <div className={`h-4 rounded-full ${color}`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="font-body-md text-gray-text">{progress}% Complete</p>
    </div>
  );
}
