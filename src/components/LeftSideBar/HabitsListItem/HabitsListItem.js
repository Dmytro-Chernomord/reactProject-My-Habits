import React from 'react';
// import PropTypes from 'prop-types';
import styles from './habitsListItem.module.css';

function ContactListItem({ text }) {
  return (
    <li className={styles.habitsCards}>
      <p className={styles.habitsCardsItems}>{text}</p>
    </li>
  );
}

export default ContactListItem;
