const MS_PER_DAY = 1000 * 60 * 60 * 24;
const sortByTime = (a, b) => {
  const aDay = new Date(b.planningTime).valueOf() % MS_PER_DAY;
  const bDay = new Date(a.planningTime).valueOf() % MS_PER_DAY;
  return bDay - aDay;
};

export default sortByTime;
