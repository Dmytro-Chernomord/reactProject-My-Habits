import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import './calendar.css';

import { getSelectedDate } from '../../../redux/date/dateActions';

// import "react-datepicker/dist/react-datepicker.css";

const birthdayStyle = `
  .react-datepicker__month-container {
  font-family: "Rubik";
   display: flex;
   flex-direction: column;
   width: 374px;
   height: 400px;
   border-radius: 0px;
   border:none;
   border-bottom: 1px solid #D5E1DC;
  }
  .react-datepicker__navigation--previous{
    margin-top: 19px;
  }
  .react-datepicker__current-month {
    font-weight: 500;
    font-size: 14px;
    padding: 0px;
    display: flex;
    background-color: #43D190;
    margin-left: 120px;
    color: #ffff;
    border-radius: 5px;
    width: 120px;
  }
  .react-datepicker__month {
  display: flex;
  width: 378px;
  max-height: 392px;
  height: 100%;
  flex-direction: column;
  padding: 20px;
  margin: 0;
  justify-content: space-between;
  border: none;
  border-radius: 0px;
  }
  .react-datepicker__header{
  border-radius: 0%;
  background-color: #fff;
  border:none;
  border-top: 1px solid #D5E1DC;
  }
  .react-datepicker__current-month{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  }

  .react-datepicker__day--selected {
  background: #43D190;
  border-radius: 5px;
  border: 1px solid #43D190;
  color: white;
  }
   .react-datepicker__day--keyboard-selected {
  background: #fff;
  border-radius: 5px;
  border: 1px solid #43D190;
  color: #43D190;
  outline: 1px solid #43D190;
  }
  .react-datepicker__day--keyboard-selected:hover{
  background: #43D190;
  border-radius: 5px;
  border: 1px solid #43D190;
  color: white;
  }
  .react-datepicker{
    border-radius: 0px;
    border: 0px; 
  }
  .react-datepicker__day--selected:hover{
  background: #43D190;
  border-radius: 5px;
  border: 1px solid #43D190;
    color: white;
  }
  .react-datepicker__day--selected:default{
  border: 1px solid #43D190;
  }
  .react-datepicker__day--keyboard-selected:default{
  border: 1px solid #43D190;
  }
  .react-datepicker__day:hover{
  border: 2px solid #43D190;
  background: #fff;
  color: #43D190;
  }
  .react-datepicker__day{
  border: 2px solid #fff;
  width: 30px;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  }
  .react-datepicker__day-names{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 14px;
  text-transform: uppercase;
  border-top: 1px solid #D5E1DC;
  border-bottom: 1px solid #D5E1DC;
  }
  .react-datepicker__day-name{
  color: #BDBDBD;
  }
  .react-datepicker__week {
  font-style: normal;
  font-weight: normal;
  display: flex;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  justify-content: space-between;
  }
  .react-datepicker__navigation--next{
    margin-top: 19px;
  }
  .calendar-header {
      text-align: center;
  }
 .week-day{
    font-weight: 500;
    font-size: 26px;
    line-height: 1.19;
    text-align: center;
    color: #4F4F4F;
  }
  .calendar-date{
    font-weight: 400;
    font-size: 26px;
    line-height: 1.19;
    text-align: center;
    color: #4F4F4F;
  }
  .calendar {
      width: 378px;
  } `;

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

registerLocale('ru', ru);
setDefaultLocale('ru');

const MONTH_NAMES = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const WEEK_DAY_NAMES = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четерг',
  'Пятница',
  'Суббота',
];

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const today = new Date();
  useEffect(() => {
    dispatch(getSelectedDate(startDate.toISOString()));
  }, [dispatch, startDate]);

  const handelDateChange = date => setStartDate(date);

  const dayOfTheWeek = WEEK_DAY_NAMES[today.getDay()];
  const dayOfTheMonth = `${today.getDate()} ${
    MONTH_NAMES[today.getMonth()]
  } ${today.getFullYear()}`;

  return (
    <div className="calendar">
      <style>{birthdayStyle}</style>
      <p className="calendar-header">
        <span className="week-day">{dayOfTheWeek} • </span>
        <span className="calendar-date">{dayOfTheMonth}</span>
      </p>
      {/* <DatePicker
        selected={startDate}
        onChange={handelDateChange}
        locale="ru"
        inline
      /> */}

      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        locale="ru"
        inline
        minDate={new Date()}
        showDisabledMonthNavigation
      />
    </div>
  );
};
