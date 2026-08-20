import React from 'react';
import styles from './TableRow.module.css';

export default function TableRow({ language, unit, progress, xp, status, flag }) {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>
        <div className="flex items-center gap-md">
          <div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
            <img className="w-full h-full object-cover" src={flag} alt={language} />
          </div>
          <span>{language}</span>
        </div>
      </td>
      <td className={styles.cell}>{unit}</td>
      <td className={styles.cell}>
        <div className="w-full bg-surface-variant rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </td>
      <td className={styles.cell}>{xp}</td>
      <td className={styles.cell}>
        <span className={`px-sm py-xs rounded-full text-label-sm font-bold ${status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-variant text-gray-light'}`}>
          {status}
        </span>
      </td>
      <td className={styles.cell + ' text-center'}>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95">
          <span className="material-symbols-outlined text-gray-text">more_horiz</span>
        </button>
      </td>
    </tr>
  );
}
