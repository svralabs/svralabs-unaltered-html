import React from 'react';
import styles from './SocialProofSection.module.css';

const languages = [
  { name: 'Spanyol', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzYzx43JAUhRrKJAU4LCejjm2a-DXINw9LvJWow_wt7_Vw97nZ7Xok3VzF9AWzTmE8KCvKZQtafroBsxY4IVyUauzMipHMFnYpvtI228l2DwJNm_GrTz2DW828jCpUDm2jBs1E35crG0X5lsqscTcFOnr95rPcWtXZDV-vXDZlrEGg9mwyKymogY7gEIGuME2nsexbJXy_qvJGjtNKVmbulyZoEsG_iPB6vX7hEo8J4XBiD1Fv1QCk9A' },
  { name: 'Prancis', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ktH_aOEauLiqJjwzZjyeWmspyGQLmy4Up6pIG9Q7nAI6jUYrz6RBqo_uXdPpCr8MiZzjdkRxnUgu-Exh-0cVt_i_DHntrPfRD_1mkPY5BelSJ1occJQXV2qw75hZT9L5yhQ3E81J4r2SqoNl_0_1aZmAqsQdr0iP3P_9JhuHlU-UkGg2FnXRjfuu17OnZvFVvoBLX7taRZhq284CK5QqPnLE4mbrMPKrO-kXV7lVdV7ssN3tE60_HA' },
  { name: 'Jerman', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA0o6irV_eWeaWj-qiTMqNA9MfNivclHwR-noFJmio02b1sPJGaIAtb0w-0iEFsyTJb-1mdTrBZZZGPWpXN5lfHvyXRRFmFia8RWHfXr2hj-KtWq1ad3JSw00VOutfsSTAK_bBGJsLl4IpQzpAhnmM0UoS6ucPlCDcjMLxqY2xhWial9eDUcDNHZXu2o9MNu02Od-Aje0WEvtQlunTGZZQhk8WOIlaBzcq-vb0cB1uay1c2LLx2-_gJg' },
  { name: 'Jepang', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBucSuZu_GjzP55FInnUNfdHJGVWQDBjtJEmsHG9wcTmoqcPk_L7fPo0sGZqQVQodLvA7kWmUxFxbg9FWr3aKwyhEacBLKuAxbxFYK7yX_jjMw3xfC2IXhZekH24XA0lxQ7uHOmSJ9d2ZLWtrXFMxSHX1NKHYqiF4LtIWxhjkgJFPqq4VnqziceXa0kEbIF8SajsaXeyTccVMAvsP1BTlBgGdhTrrFsXvtpB6O6INv3mKCAdrvOtkZqMQ' }
];

export default function SocialProofSection() {
  return (
    <div className={styles.languagePills}>
      <div className={styles.container}>
        <span className={styles.label}>Pilih bahasa:</span>
        {languages.map((language, index) => (
          <div key={index} className={styles.pill}>
            <img src={language.flag} alt={language.name} className={styles.flag} />
            {language.name}
          </div>
        ))}
      </div>
    </div>
  );
}
