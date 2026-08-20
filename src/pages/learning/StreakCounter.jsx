import React from 'react';
import styles from './StreakCounter.module.css';

export default function StreakCounter() {
  const days = [
    { date: '12', day: 'Sen', active: true },
    { date: '13', day: 'Sel', active: true },
    { date: '14', day: 'Rab', active: true },
    { date: '15', day: 'Kam', active: true },
    { date: '16', day: 'Jum', active: true },
    { date: '17', day: 'Sab', active: true },
    { date: '18', day: 'Min', active: false }
  ];

  return (
    <div className={styles.streakContainer}>
      <h3 className={styles.title}>Seri Harian</h3>
      <div className={styles.daysContainer}>
        {days.map((day, index) => (
          <div key={index} className={`${styles.dayItem} ${day.active ? styles.active : ''}`}>
            <div className={styles.date}>{day.date}</div>
            <div className={styles.day}>{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
