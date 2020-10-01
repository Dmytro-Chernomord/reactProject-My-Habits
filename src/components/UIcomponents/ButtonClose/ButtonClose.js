import React from 'react';
import styles from './ButtonClose.module.css';
import PropTypes from 'prop-types';

export default function ButtonClose({ type, onClick }) {
  return (
    <button
      className={styles.button}
      type={type}
      aria-label="close"
      onClick={onClick}
    />
  );
}

ButtonClose.propTypes = {
  type: PropTypes.string.isRequired,
  handelClick: PropTypes.func,
};
