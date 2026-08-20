import { useState } from 'react';
import styles from './AuthForm.module.css';

export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={styles.input}
          id="email"
          placeholder="nama@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="password">Kata Sandi</label>
        <div className={styles.passwordContainer}>
          <input
            className={styles.input}
            id="password"
            placeholder="••••••••"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className={styles.toggleButton}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        </div>
        {type === 'login' && (
          <div className={styles.forgotPassword}>
            <a className={styles.link} href="#">Lupa kata sandi?</a>
          </div>
        )}
      </div>
      <button className={styles.submitButton} type="submit">
        {type === 'login' ? 'Masuk Sekarang' : 'Daftar Sekarang'}
      </button>
    </form>
  );
}
