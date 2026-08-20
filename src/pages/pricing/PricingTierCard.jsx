import { Link } from 'react-router-dom';
import styles from './PricingTierCard.module.css';

export default function PricingTierCard({ name, price, period, description, features, ctaText, isPopular, isCurrent }) {
  return (
    <div className={`${styles.card} ${isPopular ? styles.popular : ''} ${isCurrent ? styles.current : ''}`}>
      {isPopular && (
        <span className={styles.popularBadge}>
          Paling populer
        </span>
      )}
      <div className={styles.name}>{name}</div>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>{period}</span>
      </div>
      <div className={styles.description}>{description}</div>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={`${styles.feature} ${feature.included ? styles.included : styles.excluded}`}>
            <span className={styles.featureIcon}>{feature.included ? '✓' : '✓'}</span>
            {feature.name}
          </li>
        ))}
      </ul>
      <Link to="#" className={`${styles.cta} ${isCurrent ? styles.currentCta : styles.superCta}`}>
        {ctaText}
      </Link>
    </div>
  );
}
