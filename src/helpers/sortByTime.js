const MS_PER_DAY = 1000 * 60 * 60 * 24;

const sortByTime = items => {
  const sort = (a, b) => {
    const aDay = new Date(a.planningTime).valueOf() % MS_PER_DAY;
    const bDay = new Date(b.planningTime).valueOf() % MS_PER_DAY;
    return aDay - bDay;
  };
  return [...items].sort(sort);
};

export default sortByTime;
