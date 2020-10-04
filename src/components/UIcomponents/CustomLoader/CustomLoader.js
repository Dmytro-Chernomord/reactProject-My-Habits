import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './CustomLoader.module.css';

export function CustomLoader() {
  return (
    <div className={styles.wrap}>
      <Loader type="Oval" color="#43d190" height={80} width={80} />
    </div>
  );
}
