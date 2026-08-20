import React from 'react';
import styles from './DailyGoal.module.css';

export default function DailyGoal() {
  const goals = [
    { icon: '⚡', title: 'Raih 30 XP', progress: 66, current: 20, total: 30, color: '#FFC800' },
    { icon: '🎯', title: 'Skor 90% di 3 pelajaran', progress: 33, current: 1, total: 3, color: '#1CB0F6' },
    { icon: '⏱️', title: 'Latihan 10 menit', progress: 80, current: 8, total: 10, color: '#58CC02' }
  ];

  return (
    <div className={styles.dailyGoalContainer}>
      <h3 className={styles.title}>Misi Harian</h3>
      {goals.map((goal, index) => (
        <div key={index} className={styles.goalItem}>
          <span className={styles.icon}>{goal.icon}</span>
          <div className={styles.goalContent}>
            <div className={styles.goalTitle}>{goal.title}</div>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: `${goal.progress}%`, backgroundColor: goal.color }}></div>
              <span className={styles.progressText}>{goal.current} / {goal.total}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
