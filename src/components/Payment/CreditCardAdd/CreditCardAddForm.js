import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/user/userOperation';

const AddCreditCardForm = () => {
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
    console.log({ number, timeExpiration });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Card Number
        <input
          onChange={handleNumber}
          name="number"
          value={number}
          type="data"
          placeholder="0000 0000 0000 0000"
          required
        />
      </label>
      <label>
        Expiration date
        <input
          onChange={handletimeExpiration}
          name="timeExpiration"
          value={timeExpiration}
          type="data"
          placeholder="00/00"
          required
        />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};
export default AddCreditCardForm;
