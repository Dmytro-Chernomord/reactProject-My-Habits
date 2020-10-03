import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';
import userOperations from '../../redux/user/userOperation';
// import userSelectors from '../../redux/user/userSelector';
// import Input from '../UIcomponents/Input/Input';
import Button from '../UIcomponents/Button/Button';
import { ButtonRemove } from '../UIcomponents/ButtonRemove/ButtonRemove';
import styles from '../ModalContent/ModalContent.module.css';

export default function CustomHabbitModal({
  onClose,
  ableDelete = false,
  habitInfo,
}) {
  const [name, setName] = useState(habitInfo);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [iteration, setIteration] = useState('');
  // const habits = useSelector(userSelectors.getHabits);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    habit => dispatch(userOperations.addHabit(habit)),
    [dispatch],
  );
  const planningTime = date + 'T' + time + ':00.000Z';

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

    // resetForm();
  };

  // const resetForm = () => {
  //   setName('');
  //   setDate('');
  //   setTime('');
  //   setIteration('');
  // };

  return (
    <div>
      <h2 className={styles.modalTitleCustom}>Настройте привычку под себя</h2>
      <p className={styles.modalTextCustom}>
        так Вам будет удобнее достичь своей цели
      </p>
      <form onSubmit={handleFormSubmit} className={styles.formProfile}>
        <label htmlFor="name" className={styles.label}>
          <span className={styles.textLabel}>Название</span>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleInputChange}
            className={styles.inputHabitName}
          />
        </label>
        <label htmlFor="date" className={styles.label}>
          <span className={styles.textLabel}>Дата старта</span>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            required
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="time" className={styles.label}>
          <span className={styles.textLabel}>Время</span>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            required
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.textLabel}>Повторение</span>
          <select
            className={styles.input}
            name="iteration"
            id="iteration"
            size="1"
            required="required"
            onChange={handleInputChange}
          >
            <option selected disabled hidden value="">
              Выбрать
            </option>
            <option value="allday">Ежедневно</option>
            <option value="workday">Пн-Вт-Ср-Чт-Пт</option>
            <option value="weekend">Сб-Вс</option>
            <option value="firstset">Пн-Ср-Пт</option>
            <option value="secondset">ВТ-ЧТ-СБ</option>
          </select>
        </label>
        <ButtonRemove type="button" handelClick={() => onClose()} />
        {ableDelete && (
          <button type="button" onClick={() => null}>
            Удалить привычку
          </button>
        )}
        <div className={styles.btnFolder}>
          <div className={styles.btnBox}>
            <Button
              type={'button'}
              green={false}
              handelClick={() => onClose()}
              label={'Отмена'}
            />
          </div>
          <div>
            <Button
              type={'submit'}
              green={true}
              // handelClick={() => onClose()}
              label={'Сохранить'}
            />
          </div>
        </div>

        {/* <button type="button" onClick={onClose}>
          Отмена
        </button>
        <button type="submit">Сохранить</button> */}
      </form>
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
