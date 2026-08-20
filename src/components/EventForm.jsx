import React, { useState } from 'react';
import styles from '../pages/AdminEventManagement.module.css';

export default function EventForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      isActive: true,
    });
  };

  return (
    <section className={styles.eventFormCard}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Buat Event Baru</h3>
        <span className="material-symbols-outlined text-accent-pink" data-icon="edit_calendar">edit_calendar</span>
      </div>
      <form className={styles.formContent} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Nama Event</label>
          <input
            className={styles.formInput}
            placeholder="Contoh: Jastip Tokyo Summer"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.dateGrid}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Tanggal Mulai</label>
            <input
              className={styles.formInput}
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Tanggal Selesai</label>
            <input
              className={styles.formInput}
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.switchContainer}>
          <div className={styles.switchLabel}>
            <span className={styles.switchText}>Status Aktif</span>
            <span className={styles.switchDescription}>Publikasikan langsung ke pelanggan</span>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <button className={styles.submitButton} type="submit">
          Simpan &amp; Publish
        </button>
      </form>
    </section>
  );
}
