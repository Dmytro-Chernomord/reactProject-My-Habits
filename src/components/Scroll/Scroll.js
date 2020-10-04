import React from 'react';
import styles from './Scroll.module.css';

export const Scroll = ({
  staticComponentBefore: StaticComponentBefore,
  scrolledComponent: ScrolledComponent,
  staticComponentAfter: StaticComponentAfter,
  ...scrollProps
}) => (
  <>
    <div className={styles.outer}>
      <div>
        <StaticComponentBefore {...scrollProps} />
      </div>
      <div className={styles.inner}>
        <div>{ScrolledComponent && <ScrolledComponent {...scrollProps} />}</div>
      </div>
      <div className={styles.centered}>
        {StaticComponentAfter && <StaticComponentAfter {...scrollProps} />}
      </div>
    </div>
  </>
);
