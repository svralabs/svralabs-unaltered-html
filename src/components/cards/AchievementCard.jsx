import React from 'react';

export default function AchievementCard({ title, description, icon, color }) {
  return (
    <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md">
      <div className={`flex items-center justify-center h-24 w-24 rounded-full mx-auto ${color}`}>
        <span className="material-symbols-outlined text-6xl text-white">{icon}</span>
      </div>
      <div className="text-center">
        <h4 className="font-headline-md text-headline-md text-on-surface">{title}</h4>
        <p className="font-body-md text-gray-text">{description}</p>
      </div>
    </div>
  );
}
