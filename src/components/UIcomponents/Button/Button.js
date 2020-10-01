// created by Elena

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ handelClick, label, type, green }) {
  return (
    <button
      type={type}
      onClick={handelClick}
      className={green ? styles.ButtonGreen : styles.ButtonWhite}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handelClick: PropTypes.func,
  green: PropTypes.bool,
};
