//created by Elena
//принимает дату в формате строки из 10 символов: "2020-10-01" и массив привычек
//возвращает массив обьектов привычек с датами их выполнения и статусом на дату, которая в параметрах принята
export const onFilterHabits = (date, habits) => {
  const habitsWithDates = [];
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  for (let i = 0; i < habits.length; i++) {
    const el = habits[i];
    const habitsDates = [];
    if (el.iteration === 'allday') {
      for (let g = 0; habitsDates.length < el.data.length; g++) {
        //   const habbitDay = Date.parse(el.planningTime) + g * MS_PER_DAY;
        const habbitDay = Date.parse(el.createAt) + g * MS_PER_DAY; //для теста пока ссылаюсь на дату создания привычки
        const dateToString = new Date(habbitDay);
        habitsDates.push(dateToString.toISOString().slice(0, 10));
      }
    } else if (el.iteration === 'workday') {
      for (let g = 0; habitsDates.length < el.data.length; g++) {
        //   const habbitDay = Date.parse(el.planningTime) + g * MS_PER_DAY;
        const habbitDay = Date.parse(el.createAt) + g * MS_PER_DAY; //для теста пока ссылаюсь на дату создания привычки
        const dateToString = new Date(habbitDay);
        if (dateToString.getDay() > 0 && dateToString.getDay() < 6) {
          habitsDates.push(dateToString.toISOString().slice(0, 10));
        }
      }
    } else if (el.iteration === 'weekend') {
      for (let g = 0; habitsDates.length < el.data.length; g++) {
        //   const habbitDay = Date.parse(el.planningTime) + g * MS_PER_DAY;
        const habbitDay = Date.parse(el.createAt) + g * MS_PER_DAY; //для теста пока ссылаюсь на дату создания привычки
        const dateToString = new Date(habbitDay);
        if (dateToString.getDay() === 0 || dateToString.getDay() === 6) {
          habitsDates.push(dateToString.toISOString().slice(0, 10));
        }
      }
    } else if (el.iteration === 'firstset') {
      for (let g = 0; habitsDates.length < el.data.length; g++) {
        //   const habbitDay = Date.parse(el.planningTime) + g * MS_PER_DAY;
        const habbitDay = Date.parse(el.createAt) + g * MS_PER_DAY; //для теста пока ссылаюсь на дату создания привычки
        const dateToString = new Date(habbitDay);
        if (
          dateToString.getDay() === 1 ||
          dateToString.getDay() === 3 ||
          dateToString.getDay() === 5
        ) {
          habitsDates.push(dateToString.toISOString().slice(0, 10));
        }
      }
    } else if (el.iteration === 'secondset') {
      for (let g = 0; habitsDates.length < el.data.length; g++) {
        //   const habbitDay = Date.parse(el.planningTime) + g * MS_PER_DAY;
        const habbitDay = Date.parse(el.createAt) + g * MS_PER_DAY; //для теста пока ссылаюсь на дату создания привычки
        const dateToString = new Date(habbitDay);
        if (
          dateToString.getDay() === 2 ||
          dateToString.getDay() === 4 ||
          dateToString.getDay() === 6
        ) {
          habitsDates.push(dateToString.toISOString().slice(0, 10));
        }
      }
    } else if (el.iteration === 'eachTwoDays') {
      for (let g = 0; habitsDates.length < el.data.length; g++) {
        //   const habbitDay = Date.parse(el.planningTime) + g * MS_PER_DAY;
        const habbitDay = Date.parse(el.createAt) + g * MS_PER_DAY * 2; //для теста пока ссылаюсь на дату создания привычки
        const dateToString = new Date(habbitDay);
        habitsDates.push(dateToString.toISOString().slice(0, 10));
      }
    }
    /// вытягиваем статус привычки из массива data по индексу
    console.log('habitsDates.indexOf(date)', habitsDates.indexOf(date));
    const indexOfCompletedData = habitsDates.indexOf(date); // возвращает индекс, под которым находится выбранная дата в массиве дат привычки(0-20), или -1
    const completed = el.data[indexOfCompletedData]; // возвращает статус привычки на выбранную дату

    habitsWithDates.push({ ...el, habitsDates, completed });
  }
  const filteredHabits = habitsWithDates.filter(habit =>
    habit.habitsDates.includes(date),
  );

  return filteredHabits;
};

// "allday" > Ежедневно
// workday">Пн-Вт-Ср-Чт-Пт
// weekend">Сб-Вс
// "firstset" > Пн - Ср - Пт
// secondset">ВТ-ЧТ-СБ
// "eachTwoDays"
