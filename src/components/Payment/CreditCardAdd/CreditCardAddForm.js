import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/user/userOperation';
import Button from '../../Button/Button';
import styles from '../../ChangePassword/ChangePassword.module.css';
import InputMask from 'react-input-mask';

function CardNumbInput(props) {
  return (
    <InputMask
      mask="9999 9999 9999 9999"
      onChange={props.onChange}
      value={props.value}
      name="number"
      className={styles.input}
      placeholder={props.placeholder}
    />
  );
}

function ExpirationDateInput(props) {
  return (
    <InputMask
      mask="99/9999"
      onChange={props.onChange}
      value={props.value}
      name="timeExpiration"
      className={styles.input}
      placeholder={props.placeholder}
    />
  );
}
const AddCreditCardForm = ({ closeForm }) => {
  const [number, setNumber] = useState('');
  const [timeExpiration, setTimeExpiration] = useState('');
  const dispatch = useDispatch();

  const addCreditCard = useCallback(() => {
    dispatch(operations.addCreditCard({ number, timeExpiration }));
  }, [dispatch, number, timeExpiration]);

  const handleNumber = event => {
    setNumber(event.target.value);
  };

  const handletimeExpiration = event => {
    setTimeExpiration(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addCreditCard();
    setNumber('');
    setTimeExpiration('');
    //закрывать по ответу от бека
    closeForm();
  };

  return (
    <div className={styles.boxFormPassword}>
      <form className={styles.formProfile} onSubmit={onSubmit}>
        <label className={styles.label}>
          Card Number
          <CardNumbInput
            onChange={handleNumber}
            name="number"
            value={number}
            className={styles.input}
            type="data"
            placeholder="0000 0000 0000 0000"
            required
          />
        </label>
        <label className={styles.label}>
          Expiration date
          <ExpirationDateInput
            onChange={handletimeExpiration}
            name="timeExpiration"
            value={timeExpiration}
            className={styles.input}
            type="data"
            placeholder="00/0000"
            required
          />
        </label>
        <Button variety={'white'} text="Добавить" />
      </form>
    </div>
  );
};
export default AddCreditCardForm;
