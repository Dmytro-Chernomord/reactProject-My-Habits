import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import habitsOperation from '../../redux/habits/habitsOperation';
import userOperations from '../../redux/user/userOperation';
import { TextField } from '@material-ui/core';
// import userSelectors from '../../redux/user/userSelector';
// import Input from '../UIcomponents/Input/Input';
import Button from '../UIcomponents/Button/Button';
import { ButtonRemoveHabit } from '../UIcomponents/ButtonRemoveHabit/ButtonRemoveHabit';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import './customCalendar.css';
import styles from '../ModalContent/ModalContent.module.css';
import { teal } from '@material-ui/core/colors';
import ModalBackdrop from '../Modal/Modal';

const personalStyle = `
 .calendarBox .react-datepicker__input-container > input { 
  position: relative;
  margin: 0;  
  width: 220px;
  height: 48px;
  padding: 10px 20px;
  background-color: #ffffff;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.16;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

}

  .calendarBox .react-datepicker__month-container {
  font-family: "Rubik";
  width: 280px;
  height: 280px;
   display: flex;
   flex-direction: column;
   height: 280px;
   border-radius: 10px;
   border:none;
   box-shadow: 0px 6px 26px rgba(24, 28, 39, 0.1);
  margin-left: -3px;
  }
  .calendarBox .react-datepicker__navigation--previous{
    margin-top: 12px;
    right: 12px;
  }
  .calendarBox .react-datepicker__current-month {
        font-family: "Rubik";
    font-weight: 500;
    font-size: 14px;
    padding: 0px;
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    color: #4f4f4f;
    border-radius: 5px;
    width: 120px;
    height: 40px;
  }
  .calendarBox .react-datepicker__month {
    backdrop-filter: blur(24px);
    font-family: "Montserrat";
     background-color: rgba(255, 255, 255, 0.7);
    color: #181c27;

  display: flex;
  max-height: 200px;
  height: 100%;
  flex-direction: column;
  padding: 0 10px;
  margin: 0;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  }
  .calendarBox .react-datepicker__header{
  border-radius: 0%;
  background-color: #fff;
  border:none;
border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .calendarBox .react-datepicker__current-month{
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .calendarBox .react-datepicker__day--selected {
  background: #43D190;
  border-radius: 5px;
  border: 1px solid #43D190;
  color: white;
  }
  .calendarBox .react-datepicker__day--keyboard-selected {
  background: #fff;
  border-radius: 5px;
  border: 1px solid #43D190;
  color: #43D190;
  outline: 1px solid #43D190;
  }
  .calendarBox .react-datepicker__day--keyboard-selected:hover{
  background: #43D190;
  border-radius: 5px;
  border: 1px solid #43D190;
  color: white;
  }
  .calendarBox .react-datepicker{
    box-shadow: 0px 6px 26px rgba(24, 28, 39, 0.1);
    height: 280px;
    border-radius: 10px;
    border: 0px; 
  }
  .calendarBox .react-datepicker__day--selected:hover{
  background: #43D190;
  border-radius: 5px;
  border: 1px solid #43D190;
    color: white;
  }
  .calendarBox .react-datepicker__day--selected:default{
  border: 1px solid #43D190;
  }
  .calendarBox .react-datepicker__day--keyboard-selected:default{
  border: 1px solid #43D190;
  }
  .calendarBox .react-datepicker__day:hover{
  border: 2px solid #43D190;
  background: #fff;
  color: #43D190;
  }
  .calendarBox .react-datepicker__day{
  
  width: 30px;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  }
  .calendarBox .react-datepicker__day-names{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
 
  text-transform: uppercase;
      background-color: rgba(255, 255, 255, 0.7);

  }
  .calendarBox .react-datepicker__day-name{
  color: #BDBDBD;
  }
  .calendarBox .react-datepicker__week {
  font-style: normal;
  font-weight: normal;
  display: flex;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  justify-content: space-between;
  }
  .calendarBox .react-datepicker__navigation--next{
    margin-top: 12px;
    right: 12px;
  }
  .calendarBox .calendar-header {
      text-align: center;
  }
 .calendarBox .week-day{
    font-weight: 500;
    font-size: 26px;
    line-height: 1.19;
    text-align: center;
    color: #4F4F4F;
  }
  .calendarBox .calendar-date{
    font-weight: 400;
    font-size: 26px;
    line-height: 1.19;
    text-align: center;
    color: #4F4F4F;
  }
  .react-datepicker__day--outside-month {
    color: #BDBDBD;
  }

  // .react-datepicker-popper{display: none;}

  .calendarBox {
  position: absolute;
  top: 0px;
  left: 222px;
  z-index: 10;
  width: 220px;
  height: 44px;
  /* padding: 10px 20px; */
  background-color: #ffffff;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.16;
  /* border: 1px solid #e0e0e0; */
  border-radius: 5px;
}
   `;

registerLocale('ru', ru);
setDefaultLocale('ru');

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {},
  },
  // select: {
  //   height: 30,
  //   width: 220,
  // },

  // inputBase: {
  //   maxWidth: 220,
  // },

  input: {
    width: 220,
    height: 25,
    textAlign: 'left',
    fontWeight: 400,
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 18,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Rubik',
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: 0,
    minWidth: 220,
    maxHeight: 44,
  },
  formInput: {
    maxHeight: 48,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formOption: {
    backGroundColor: teal,
  },
}));

function CustomHabbitModal({ habitName, onClick, ableToDelete, data }) {
  const classes = useStyles();
  const [name, setName] = useState(ableToDelete ? data.name : habitName);
  const [time, setTime] = useState(
    ableToDelete ? data.planningTime.slice(11, 16) : '',
  );
  const [iteration, setIteration] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    habit => dispatch(userOperations.addHabit(habit)),
    [dispatch],
  );
  const piece = startDate.toISOString().slice(0, 11);
  const planningTime = piece + time + ':00.000Z';

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'date':
        setStartDate(value);
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

  const deleteHabit = () => {
    dispatch(habitsOperation.removeHabit(data._id));
  };

  return (
    <div className={styles.modalWrapper}>
      <style>{personalStyle}</style>
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
            autoFocus="autofocus"
            autoComplete="off"
          />
        </label>
        <div className={styles.dateBox}>
          <label htmlFor="date" className={styles.label}>
            <span className={styles.textLabel}>Дата старта</span>
            <div className={'calendarBox'}>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={date => setStartDate(date)}
                locale="ru"
                placeholder=" __.__.__"
                disabled={ableToDelete}
              />
            </div>
          </label>
        </div>
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
            disabled={ableToDelete}
          />
        </label>
        <label className={styles.label}>
          <span className={styles.textLabel}>Повторение</span>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label"></InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              name="iteration"
              value={iteration}
              onChange={handleInputChange}
              input={<BootstrapInput />}
              disabled={ableToDelete}
            >
              <MenuItem value="allday">Ежедневно</MenuItem>
              <MenuItem value="workday">Пн-Вт-Ср-Чт-Пт</MenuItem>
              <MenuItem value="weekend">Сб-Вс</MenuItem>
              <MenuItem value="firstset">Пн-Ср-Пт</MenuItem>
              <MenuItem value="secondset">Вт-Чт-Сб</MenuItem>
              <MenuItem value="eachTwoDays">Раз в 2 дня</MenuItem>
              <MenuItem value="onceAWeek">Раз в неделю</MenuItem>
            </Select>
          </FormControl>
        </label>
        {ableToDelete && (
          <div className={styles.btnRemoveFolder}>
            <ButtonRemoveHabit
              type="button"
              // временный функционал кнопки Удалить привычку
              handelClick={deleteHabit}
              title="Удалить привычку"
            />
          </div>
        )}
        <div className={styles.btnFolder}>
          <div className={styles.btnBox}>
            <Button
              type={'button'}
              green={false}
              handelClick={() => onClick()}
              label={'Отмена'}
            />
          </div>
          <div>
            <Button type={'submit'} green={true} label={'Сохранить'} />
          </div>
        </div>
      </form>{' '}
      <ButtonClose type="button" onClick={onClick} />
    </div>
  );
}

export default ModalBackdrop(CustomHabbitModal);
