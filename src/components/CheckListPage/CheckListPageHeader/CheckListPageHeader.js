import React from 'react';
import Button from '../../UIcomponents/Button/Button';
import s from './CheckListPageHeader.module.css';

export const CheckListPageHeader = ({ toggleModal }) => {
  return (
    <div className={s.headerContainer}>
      <h2 className={s.header}>Чек-лист привычек</h2>
      <Button
        type={'button'}
        green={false}
        handelClick={toggleModal}
        label={'+ Сигареты за сегодня'}
      />
    </div>
  );
};
