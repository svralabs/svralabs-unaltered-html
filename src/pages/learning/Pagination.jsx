import React from 'react';
import styles from './Pagination.module.css';

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <div className={styles.pages}>
        <button className={styles.page + ' ' + styles.active}>1</button>
        <button className={styles.page}>2</button>
        <button className={styles.page}>3</button>
        <span className={styles.ellipsis}>...</span>
        <button className={styles.page}>8</button>
      </div>
      <button className={styles.button}>
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
