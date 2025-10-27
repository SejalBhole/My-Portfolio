import React from 'react';
import styles from './Loading.module.css';

export const Loading = ({ message = "Loading..." }) => {
  return (
    <div className={styles.loadingContainer} role="status" aria-live="polite">
      <div className={styles.spinner} aria-hidden="true">
        <div className={styles.spinnerInner}></div>
      </div>
      <p className={styles.loadingText}>{message}</p>
    </div>
  );
};

export const LoadingSpinner = ({ size = "medium" }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`} role="status" aria-label="Loading">
      <div className={styles.spinnerInner}></div>
    </div>
  );
};

export default Loading; 