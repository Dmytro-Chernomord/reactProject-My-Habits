import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import userOperations from '../../redux/user/userOperation';
import userSelectors from '../../redux/user/userSelector';
import Input from '../UIcomponents/Input/Input';

// import styles from './CreateHabbitForm.module.css';

export default function CustomHabbitModal({
  onClose,
  ableDelete = false,
  habitInfo,
}) {
  const [name, setName] = useState(habitInfo);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [iteration, setIteration] = useState('');
  // const habits = useSelector(userSelectors.getHabits);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    habit => dispatch(userOperations.addHabit(habit)),
    [dispatch],
  );
  const planningTime = date + ' ' + time;

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'date':
        setDate(value);
        break;

      case 'time':
        setTime(value);
        break;

      case 'iteration':
        setIteration(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const data = { name, planningTime, iteration };
    onSubmit(data);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setDate('');
    setTime('');
    setIteration('');
  };

  return (
    <div>
      <h2>Настройте привычку под себя</h2>
      <p>так Вам будет удобнее достичь своей цели</p>
      {/* <button type="button" onClick={onClose}></button> */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Название</label>
        <Input
          type="text"
          // name="name"
          id="name"
          // error="wrong language"
          // required
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="date">Дата старта</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={handleInputChange}
        />
        <label htmlFor="time">Время</label>
        <input
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={handleInputChange}
        />
        <label>Повторение</label>
        <select
          name="iteration"
          id="iteration"
          size="1"
          onChange={handleInputChange}
        >
          <option value="eachDay">Ежедневно</option>
          <option value="eachTwoDays">Раз в два дня</option>
          <option value="Mn-Wd-Fr">ПН-СР-ПТ</option>
          <option value="Tu-Th-Sa">ВТ-ЧТ-СБ</option>
        </select>
      </form>
      {ableDelete && (
        <button type="button" onClick={() => null}>
          Удалить привычку
        </button>
      )}
      <button type="button" onClick={onClose}>
        Отмена
      </button>
      <button type="submit">Сохранить</button>
    </div>
  );
}

/* <CSSTransition
        in={showAlert}
        classNames="alert"
        timeout={500}
        unmountOnExit
      >
        <p className={styles.alert}>Contact already exists!</p>
      </CSSTransition>
      <CSSTransition
        in={showInfo}
        classNames="info"
        timeout={500}
        unmountOnExit
      >
        <p className={styles.info}>Fill both fields please</p>
      </CSSTransition>
      </form>
      <button type="button" onClick={onClose}>
        Х
      </button> */
