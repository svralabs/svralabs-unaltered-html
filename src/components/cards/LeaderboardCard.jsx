import React from 'react';

export default function LeaderboardCard({ rank, name, score, avatarUrl }) {
  return (
    <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex items-center gap-md">
      <span className="font-headline-lg text-headline-lg text-primary">{rank}</span>
      <img className="w-12 h-12 rounded-full border-2 border-border-color" src={avatarUrl} alt={name} />
      <div>
        <p className="font-body-lg text-on-surface">{name}</p>
        <p className="font-label-sm text-gray-light">Score: {score}</p>
      </div>
    </div>
  );
}
