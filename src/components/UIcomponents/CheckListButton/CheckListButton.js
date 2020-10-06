// created by Elena
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckListButton.module.css';

export default function CheckListButton({
  isDisabled,
  handelClick,
  status,
  isCheckMark,
  label,
}) {
  const OnStyledBtn = () => {
    if (isCheckMark) {
      return status === null
        ? styles.ButtonCheck
        : status === true
        ? styles.ButtonCheckActive
        : styles.ButtonCheckDisabled;
    } else {
      return status === null
        ? styles.ButtonCross
        : status === true
        ? styles.ButtonCrossDisabled
        : styles.ButtonCrossActive;
    }
  };
  return (
    <button
      disabled={isDisabled}
      onClick={handelClick}
      type="button"
      className={OnStyledBtn()}
      aria-label={label}
    ></button>
  );
}

CheckListButton.propTypes = {
  handelClick: PropTypes.func,
  isCheckMark: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
