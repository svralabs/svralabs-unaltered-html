import React from 'react';
import styles from './OrderCard.module.css';

const OrderCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return styles.badgeGreen;
      case 'processed':
        return styles.badgePurple;
      case 'waiting':
        return styles.badgeYellow;
      case 'completed':
        return styles.badgeGray;
      default:
        return styles.badgeGray;
    }
  };

  const getStepStatus = (step, currentStep) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return 'pending';
  };

  return (
    <div className={`${styles.orderCard} ${order.status === 'completed' ? styles.completed : ''}`}>
      <div className={styles.orderHeader}>
        <div>
          <p className={styles.orderId}>{order.id} | {order.date}</p>
          {order.shopper && (
            <p className={styles.shopperInfo}>Personal Shopper: {order.shopper}</p>
          )}
        </div>
        <div className={`${styles.statusBadge} ${getStatusColor(order.status)}`}>
          {order.status === 'active' ? 'Pesanan Aktif' :
           order.status === 'processed' ? 'Diproses' :
           order.status === 'waiting' ? 'Menunggu Bayar' :
           'Selesai'}
        </div>
      </div>

      {order.status === 'active' && (
        <div className={styles.timelineContainer}>
          <div className={styles.timelineBackground}></div>
          <div className={styles.activeTimeline} style={{ width: `${(order.currentStep / 4) * 100}%` }}></div>

          <div className={styles.timelineSteps}>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className={styles.timelineStep}>
                <div className={`${styles.stepIndicator} ${getStepStatus(step, order.currentStep)}`}>
                  {getStepStatus(step, order.currentStep) === 'active' && (
                    <div className={styles.activeIndicator}></div>
                  )}
                </div>
                <span className={`${styles.stepLabel} ${getStepStatus(step, order.currentStep) === 'active' ? styles.activeLabel : ''}`}>
                  {step === 1 ? 'Order Masuk' :
                   step === 2 ? 'Diproses Tim' :
                   step === 3 ? 'Barang Terbeli' :
                   'Invoice Final'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {order.status === 'active' && (
        <div className={styles.infoBanner}>
          <span className="material-symbols-outlined">info</span>
          <p>Barang Terbeli - Menunggu Invoice</p>
        </div>
      )}

      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={order.product.image} alt={order.product.alt} />
        </div>
        <div className={styles.productDetails}>
          <h4 className={styles.productName}>{order.product.name}</h4>
          <p className={styles.productVariant}>{order.product.variant}</p>
          <p className={styles.productPrice}>{order.product.price}</p>
        </div>
      </div>

      <button className={styles.detailButton}>
        Lihat Detail
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default OrderCard;
