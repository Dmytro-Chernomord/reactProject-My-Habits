import React from 'react';
import Button from '../../UIcomponents/Button/Button';
import s from './CheckListPageHeader.module.css';

export const CheckListPageHeader = ({ dailyModal, missedDays }) => {
  return (
    <div className={s.headerContainer}>
      <h2 className={s.header}>Чек-лист привычек</h2>
      <Button
        type={'button'}
        green={false}
        handelClick={missedDays}
        label={'Пропущенные дни'}
      />
      <Button
        type={'button'}
        green={false}
        handelClick={dailyModal}
        label={'+ Сигареты за сегодня'}
      />
    </div>
  );
};
