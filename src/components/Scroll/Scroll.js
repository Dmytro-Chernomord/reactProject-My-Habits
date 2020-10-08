import React from 'react';
import styles from './Scroll.module.css';

export const Scroll = ({
  staticComponentBefore: StaticComponentBefore,
  scrolledComponent: ScrolledComponent,
  staticComponentAfter: StaticComponentAfter,
  isLeftBar,
  ...scrollProps
}) => (
  <>
    <div className={styles.outer}>
      <div>
        <StaticComponentBefore {...scrollProps} />
      </div>
      <div className={isLeftBar ? styles.innerLeft : styles.inner}>
        <div>{ScrolledComponent && <ScrolledComponent {...scrollProps} />}</div>
      </div>

      {StaticComponentAfter && (
        <div className={styles.centered}>
          <StaticComponentAfter {...scrollProps} />
        </div>
      )}
    </div>
  </>
);
