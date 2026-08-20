import React from 'react';
import styles from './AchievementsGrid.module.css';

const achievements = [
  {
    icon: '🔥',
    title: 'Bara Api',
    level: 'Lvl 4',
    description: 'Pertahankan streak 42 hari berturut-turut.',
    progress: 70,
    color: '#FF9600'
  },
  {
    icon: '👑',
    title: 'Sang Juara',
    level: 'Lvl 3',
    description: 'Selesaikan 30 pelajaran tanpa kesalahan.',
    progress: 55,
    color: '#FFC800'
  },
  {
    icon: '📚',
    title: 'Kutu Buku',
    level: 'Lvl 5',
    description: 'Pelajari 1.000 kata baru.',
    progress: 88,
    color: '#58CC02'
  },
  {
    icon: '⚡',
    title: 'Kilat',
    level: 'Lvl 2',
    description: 'Raih 500 XP dalam satu minggu.',
    progress: 40,
    color: '#1CB0F6'
  }
];

export default function AchievementsGrid() {
  return (
    <>
      <h2 className="section-title">Pencapaian</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0" style={{ backgroundColor: `${achievement.color}1C` }}>
              {achievement.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">{achievement.title}</span>
                <span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">{achievement.level}</span>
              </div>
              <div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">{achievement.description}</div>
              <div className="abar">
                <div className="afill" style={{ width: `${achievement.progress}%`, backgroundColor: achievement.color }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
