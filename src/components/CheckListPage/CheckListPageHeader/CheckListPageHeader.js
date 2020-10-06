import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Button from '../../UIcomponents/Button/Button';
import cigSelector from '../../../redux/cigarettes/cigarettesSelector';
import { checkSigaretteMissedDates } from '../../../helpers/checkSigaretteStatiscs';
import { MissedCigaretsNoti } from '../../MissedCigaretsNoti/MissedCigaretsNoti';
import cigarettesActions from '../../../redux/cigarettes/cigarettesActions';

import slideNotiAppear from '../../MissedCigaretsNoti/slide.module.css';
import s from './CheckListPageHeader.module.css';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const CheckListPageHeader = ({ toggleModal }) => {
  const [missedDates, setMissedDates] = useState([]);
  const [notiIsShown, setNotiIsShown] = useState(false);

  const dispatch = useDispatch();
  const cigarettesStartedAt = useSelector(
    cigSelector.getCigarettesDataStartedAt,
  );
  const cigarettesArray = useSelector(cigSelector.getCigarettesArray);

  useEffect(() => {
    if (cigarettesArray) {
      const today = new Date();
      const parseStartedAt = new Date(cigarettesStartedAt);
      const dif = Math.floor(
        (Date.parse(today) - Date.parse(parseStartedAt)) / MS_PER_DAY,
      );
      const dates = checkSigaretteMissedDates(
        cigarettesArray,
        dif,
        parseStartedAt,
      );
      setMissedDates(dates);
      dispatch(cigarettesActions.setMissedDates(dates));
      if (dates.length > 0) {
        setNotiIsShown(true);
      }
    }
  }, [cigarettesArray, cigarettesStartedAt, dispatch]);

  const onCloseNoti = () => {
    setNotiIsShown(false);
  };

  return (
    <div className={s.headerContainer}>
      <h2 className={s.header}>Чек-лист привычек</h2>
      <Button
        type={'button'}
        green={false}
        handelClick={toggleModal}
        label={'+ Сигареты за сегодня'}
      />
      <CSSTransition
        in={notiIsShown}
        timeout={250}
        classNames={slideNotiAppear}
        unmountOnExit
      >
        <MissedCigaretsNoti
          amountDays={missedDates.length}
          closeNoti={onCloseNoti}
        />
      </CSSTransition>
    </div>
  );
};
