//принимает массив с данными по сигаретам, число равное кол-ву дней с момента старта, данные из инпута о новых выкуренных сигаретах
//возвращает новый массив с новыми данными по кол-ву сигарет

export const checkSigaretteStatiscs = (cigarettesArray, dif, inputValue) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  let result = [];

  for (let i = 0; i < cigarettesArray.length; i++) {
    const element = cigarettesArray[i];
    if (i - dif < 0 && element === null) {
      const dayWthoutInfo = Date.parse(new Date()) - i * MS_PER_DAY;
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
