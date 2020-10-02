import React from 'react';
import styles from './ButtonRemoveHabit.module.css';
import PropTypes from 'prop-types';

export function ButtonRemoveHabit({ type, id, handelClick, title }) {
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

ButtonRemoveHabit.propTypes = {
  type: PropTypes.string.isRequired,
  handelClick: PropTypes.func,
};
