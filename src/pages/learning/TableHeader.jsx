import React from 'react';
import styles from './TableHeader.module.css';

export default function TableHeader() {
  return (
    <thead className={styles.header}>
      <tr>
        <th className={styles.cell}>BAHASA</th>
        <th className={styles.cell}>UNIT</th>
        <th className={styles.cell}>PROGRES</th>
        <th className={styles.cell}>XP TERKUMPUL</th>
        <th className={styles.cell}>STATUS</th>
        <th className={styles.cell + ' text-center'}>AKSI</th>
      </tr>
    </thead>
  );
}
