import React, { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import {
//   Route,
//   NavLink,
//   Link,
//   Switch,
//   useRouteMatch,
//   useHistory,
//   useLocation,
// } from 'react-router-dom';
// import routes from '../../routes';
// import CustomHabbit from '../CustomHabbit/CustomHabbit';
// import TemplateHabbit from '../TemplateHabbit/TemplateHabbit';
import styles from './AddHabbit.module.css';

export default function HabitChoiceModal({ onClick, onClose }) {
  //   const params = useRouteMatch();
  //   const url = params.url;
  return (
    <>
      <div>
        <h2>Добавление новой привычки</h2>
        <p>Вы можете выбрать привычку из предложенных вариантов</p>
        <button type="button" onClick={() => onClick('TemplateHabbit')}>
          Выбрать шаблонную привычку
        </button>
        <p>Или создать свою собственную</p>
        <button type="button" onClick={() => onClick('CustomHabbit')}>
          Добавить свою привычку
        </button>
        <button type="button" onClick={() => onClose()}>
          Отмена
        </button>
        <button type="button" onClick={() => onClose()}>
          X
        </button>
      </div>
      {/* <ul className={styles.info_list}>
        <li>
          <Link exact to={`${url}/template`} className={styles.info_item}>
            Выбрать шаблонную привычку
          </Link>
        </li>
        <li>
          <Link to={`${url}/custom`} className={styles.info_item}>
            Добавить свою привычку
          </Link>
        </li>
      </ul> */}
      {/* <Switch>
        <Route path={`${url}/template`} render={() => <TemplateHabbit />} />
        <Route path={`${url}/custom`} render={() => <CustomHabbit />} />
      </Switch> */}
    </>
  );
}
