import React from 'react';
import styles from './Scroll.module.css';

export const Scroll = ({
  staticComponent: StaticComponent,
  scrolledComponent: ScrolledComponent,
}) => (
  <>
    <div className={styles.outer}>
      <div>
        <StaticComponent />
      </div>
      <div className={styles.inner}>
        <ScrolledComponent />
      </div>
    </div>
  </>
);
