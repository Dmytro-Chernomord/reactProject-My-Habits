import React from 'react';
import styles from './ButtonRemove.module.css';
import PropTypes from 'prop-types';
import { LoaderSmall } from '../LoaderSmall/LoaderSmall';

export function ButtonRemove({ type, id, handelClick, isLoading }) {
  return isLoading ? (
    <LoaderSmall />
  ) : (
    <button
      className={styles.button}
      type={type}
      aria-label="delete"
      data-id={id}
      onClick={handelClick}
    ></button>
  );
}

ButtonRemove.propTypes = {
  type: PropTypes.string.isRequired,
  handelClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
