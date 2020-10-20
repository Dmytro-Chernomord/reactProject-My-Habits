// принимает cigarettesArray - массив с данными по сигаретам, dif - число равное кол-ву дней с момента старта,
// inputValue - данные из инпута о новых выкуренных сигаретах
// возвращает новый массив с новыми данными по кол-ву сигарет
const DAYS_FOR_MAKE_HABIT = 21;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const checkSigaretteStatiscs = (cigarettesArray, dif, inputValue) => {
  let result = [];

  for (let i = 0; i < DAYS_FOR_MAKE_HABIT; i++) {
    const element = cigarettesArray[i];
    if (i - dif < 0 && element === null) {
      // const dayWthoutInfo = Date.parse(new Date()) - i * MS_PER_DAY;
      //   console.log(new Date(dayWthoutInfo));
      //   console.log('showModal');
      //   console.log('element : ', element, 'i : ', i);
      // эта логика будет пушить информацию для будущей модалки с вопросами о пропущенных днях
    }
    if (i - dif === 0) {
      if (element !== null) {
        const newSigValue = element + inputValue;
        result.push(newSigValue);
        continue;
      }
      if (element === null) {
        // тоже выводить модалку с вопросом курил ли он сегодня
        result.push(inputValue);
        continue;
      }
    }

    if (element !== undefined) {
      result.push(element);
    }
    if (element === undefined) {
      result.push(null);
    }
  }

  return result;
};

const checkSigaretteMissedDates = (cigarettesArray, dif, parseStartedAt) => {
  let result = [];
  for (let i = 0; i < DAYS_FOR_MAKE_HABIT; i++) {
    const element = cigarettesArray[i];
    if (i - dif < 0 && element === null) {
      const dayWthoutInfo = new Date(parseStartedAt).valueOf() + i * MS_PER_DAY;

      // console.log('parseStartedAt', parseStartedAt);
      // console.log('dayWthoutInfo', dayWthoutInfo);
      // console.log(
      //   ' new Date dayWthoutInfo',
      //   new Date(dayWthoutInfo).toISOString(),
      // );
      result.push({ date: new Date(dayWthoutInfo).toISOString(), index: i });
      continue;

      // console.log('showModal');
      // console.log('element : ', element, 'i : ', i);
      // эта логика будет пушить информацию для будущей модалки с вопросами о пропущенных днях
    }
    // console.log(result);
  }
  return result;
};
export { checkSigaretteStatiscs, checkSigaretteMissedDates };
