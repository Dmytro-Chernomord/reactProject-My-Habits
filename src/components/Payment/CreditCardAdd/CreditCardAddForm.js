import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask, { beforeMaskedStateChange } from 'react-input-mask';
import operations from '../../../redux/user/userOperation';
import Button from '../../Button/Button';
import styles from '../../ChangePassword/ChangePassword.module.css';
import NotificationModal from '../../notifications/NotificationModal';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function CardNumbInput(props) {
  return (
    <InputMask
      mask={props.mask}
      // mask="9999 XXXX XXXX XXXX"
      onChange={props.onChange}
      value={props.value}
      name="number"
      onBlur={props.handleBlur}
      className={styles.input}
      placeholder={props.placeholder}
      style={{
        outlineColor: props.error ? '#fe6083' : '#43d190',
        borderColor: props.error ? '#fe6083' : '#e0e0e0',
      }}
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
      style={{
        outlineColor: props.error ? '#fe6083' : '#43d190',
        borderColor: props.error ? '#fe6083' : '#e0e0e0',
      }}
    />
  );
}
const AddCreditCardForm = ({ closeForm }) => {
  const [number, setNumber] = useState('');
  const [timeExpiration, setTimeExpiration] = useState('');
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorRequiredNumber, setErrorRequiredNumber] = useState(false);
  const [errorRequiredDate, setErrorRequiredDate] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [dateValid, setDateValid] = useState(null);
  const [mask, setMask] = useState('9999 9999 9999 9999');

  const dispatch = useDispatch();

  const addCreditCard = useCallback(() => {
    dispatch(operations.addCreditCard({ number, timeExpiration }));
  }, [dispatch, number, timeExpiration]);

  const handleNumber = ({ target: { value } }) => {
    setMask('9999 9999 9999 9999');
    if (value.split('_').length === 17) {
      setErrorRequiredNumber(true);
      setErrorNumber(false);
    } else if (value.split('_').length !== 1) {
      setErrorNumber(true);
      setErrorRequiredNumber(false);
      setErrorShow(false);
    } else {
      setErrorNumber(false);
      setErrorRequiredNumber(false);
      setErrorShow(false);
    }

    setNumber(value);
  };

  const handleBlur = () => {
    const num = number.split(' ');
    const xxxx = ['XXXX', 'XXXX', 'XXXX'];
    num.splice(1, 3, ...xxxx);
    setMask(num.join(' '));
  };

  const handletimeExpiration = ({ target: { value } }) => {
    if (value.split('_').length === 7) {
      setDateValid(null);
      setErrorRequiredDate(true);
      setErrorDate(false);
    } else if (value.split('_').length !== 1) {
      setDateValid(null);
      setErrorDate(true);
      setErrorRequiredDate(false);
      setErrorShow(false);
    } else {
      setDateValid(null);
      setErrorDate(false);
      setErrorRequiredDate(false);
      setErrorShow(false);
    }
    setTimeExpiration(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const numberValue = e.target.children[1].children[1].value;
    const dateValue = e.target.children[3].children[1].value;
    const yearValue = Number(dateValue.slice(3));
    const monthValue = Number(dateValue.slice(0, 2));
    const date = new Date();
    const month = Number(date.getMonth().toString().padStart(2, 0));
    const year = date.getFullYear();

    if (monthValue > 12) {
      setDateValid('*ошибка! В году всего 12 месяцов');
      return;
    } else if (yearValue < year && dateValue.length !== 0) {
      setDateValid('*ошибка! Cрок действия карты истек');
      return;
    } else if (yearValue === year && monthValue < month) {
      setDateValid('*ошибка! Проверте срок действия карты');
      return;
    } else {
      setDateValid(null);
    }

    if (numberValue.length === 0 || dateValue.length === 0) {
      setErrorShow(true);
      return;
    } else if (
      errorNumber ||
      errorDate ||
      errorRequiredNumber ||
      errorRequiredDate
    ) {
      setErrorShow(false);
      return;
    } else {
      setErrorShow(false);
    }

    addCreditCard();
    setNumber('');
    setTimeExpiration('');
    //закрывать по ответу от бека
    closeForm();
  };

  return (
    <div className={styles.boxFormPassword}>
      <Cards
        number={number}
        expiry={timeExpiration}
        placeholders={{ name: '' }}
      />
      <form className={styles.formProfile} onSubmit={onSubmit}>
        <div className={styles.boxErrorCard}>
          {errorNumber && (
            <p className={styles.error}>*номер карты не валидный</p>
          )}
          {errorRequiredNumber && (
            <p className={styles.error}>*обязательные поля ввода</p>
          )}
        </div>
        <label className={styles.label}>
          <span className={styles.textLabelCard}>Card Number</span>
          <CardNumbInput
            onChange={handleNumber}
            name="number"
            value={number}
            type="data"
            mask={mask}
            handleBlur={handleBlur}
            placeholder="0000 0000 0000 0000"
            required
            error={errorNumber || errorRequiredNumber}
          />
        </label>
        <div className={styles.boxErrorCard}>
          {errorDate && (
            <p className={styles.error}>*дата не правилого формата</p>
          )}
          {errorRequiredDate && (
            <p className={styles.error}>*обязательные поля ввода</p>
          )}
          {dateValid && <p className={styles.error}>{dateValid}</p>}
        </div>
        <label className={styles.label}>
          <span className={styles.textLabelCard}>Expiration date</span>
          <ExpirationDateInput
            onChange={handletimeExpiration}
            name="timeExpiration"
            value={timeExpiration}
            type="data"
            placeholder="00/0000"
            required
            error={errorDate || errorRequiredDate || dateValid}
          />
        </label>

        <div className={styles.boxErrorCard}>
          {errorShow && (
            <p className={styles.error}>*необходимо заполнить все поля</p>
          )}
          <div style={{ marginBottom: '5px' }}>
            <NotificationModal />
          </div>
        </div>
        <Button variety={'white'} text="Добавить" />
      </form>
    </div>
  );
};
export default AddCreditCardForm;
