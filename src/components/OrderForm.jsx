import React, { useState } from 'react';
import styles from './OrderForm.module.css';

const OrderForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    address: '',
    insurance: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    whatsapp: false,
    address: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      whatsapp: formData.whatsapp.trim() === '',
      address: formData.address.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <section className={styles.orderFormSection}>
      <div className={styles.formHeader}>
        <span className="material-symbols-outlined text-primary" data-icon="local_shipping">local_shipping</span>
        <h3 className={styles.formTitle}>Detail Pengiriman</h3>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">NAMA PENERIMA</label>
          <input
            className={`${styles.formInput} ${errors.name ? 'border-error' : ''}`}
            id="name"
            placeholder="Contoh: Rian Alfian"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-error text-xs mt-1">Nama penerima wajib diisi</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="whatsapp">NO. WHATSAPP</label>
          <div className={styles.whatsappInput}>
            <span className={styles.whatsappPrefix}>+62</span>
            <input
              className={`${styles.formInput} ${errors.whatsapp ? 'border-error' : ''}`}
              id="whatsapp"
              placeholder="812 3456 7890"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
          {errors.whatsapp && <p className="text-error text-xs mt-1">Nomor WhatsApp wajib diisi</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="address">ALAMAT LENGKAP PENGIRIMAN</label>
          <textarea
            className={`${styles.formTextarea} ${errors.address ? 'border-error' : ''}`}
            id="address"
            placeholder="Masukkan nama jalan, nomor rumah, RT/RW, Kecamatan, dan Kode Pos"
            rows="4"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-error text-xs mt-1">Alamat pengiriman wajib diisi</p>}
        </div>
        <div className={styles.insuranceOption}>
          <input
            className={styles.insuranceCheckbox}
            id="insurance"
            type="checkbox"
            checked={formData.insurance}
            onChange={handleChange}
          />
          <label className={styles.insuranceLabel} htmlFor="insurance">
            Tambahkan asuransi pengiriman untuk proteksi lebih (Rp 5.000)
          </label>
        </div>
      </form>
    </section>
  );
};

export default OrderForm;
