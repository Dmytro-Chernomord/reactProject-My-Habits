import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { getSelectedDate } from '../../../redux/date/dateActions';
import './calendar.css';

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
  'Четверг',
  'Пятница',
  'Суббота',
];

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const registerData = useSelector(state => state.user.registerData);
  const dispatch = useDispatch();
  const today = new Date();

  useEffect(() => {
    dispatch(getSelectedDate(startDate.toISOString()));
  }, [dispatch, startDate]);

  const handelDateChange = date => setStartDate(date);

  const clickToCurrentDay = () => setStartDate(today);

  const dayOfTheWeek = WEEK_DAY_NAMES[today.getDay()];
  const dayOfTheMonth = `${today.getDate()} ${
    MONTH_NAMES[today.getMonth()]
  } ${today.getFullYear()}`;

  return (
    <div className="calendar">
      <p className="calendar-header" onClick={clickToCurrentDay}>
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
        onChange={handelDateChange}
        locale="ru"
        inline
        minDate={new Date(registerData)}
        showDisabledMonthNavigation
      />
    </div>
  );
};
