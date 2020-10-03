import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './CustomLoader.module.css';

export function CustomLoader() {
  return (
    <div className={styles.wrap}>
      <Loader type="Hearts" color="#43d190" height={100} width={100} />
    </div>
  );
}
