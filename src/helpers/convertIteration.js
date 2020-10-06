export default function convertIteration(value) {
  switch (value) {
    case 'allday':
      return 'Ежедневно';
    case 'workday':
      return 'Пн-Вт-Ср-Чт-Пт';
    case 'weekend':
      return 'Сб-Вс';
    case 'firstset':
      return 'Пн-Ср-Пт';
    case 'secondset':
      return 'Вт-Чт-Сб';
    case 'eachTwoDays':
      return 'Раз в 2 дня';
    case 'onceAWeek':
      return 'Раз в неделю';
    default:
      return null;
  }
}
