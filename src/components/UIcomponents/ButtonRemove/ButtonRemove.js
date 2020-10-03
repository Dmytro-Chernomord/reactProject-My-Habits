import React from 'react';
import styles from './ButtonRemove.module.css';
import PropTypes from 'prop-types';

export function ButtonRemove({ type, id, handelClick, title }) {
  return (
    <button
      className={styles.button}
      type={type}
      aria-label="delete"
      data-id={id}
      onClick={handelClick}
    >
      {title}
    </button>
  );
}

ButtonRemove.propTypes = {
  type: PropTypes.string.isRequired,
  handelClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};
