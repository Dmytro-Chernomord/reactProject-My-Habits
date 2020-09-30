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
import HabitChoiceModal from '../HabitChoiceModal/HabitChoiceModal';
import HabitTemplateModal from '../HabitTemplateModal/HabitTemplateModal';
import CustomHabbitModal from '../CustomHabbitModal/CustomHabbitModal';
import DailyResultModal from '../DailyResultModal/DailyResultModal';
import InterviewModal from '../InterviewModal/InterviewModal';
import styles from './ModalContent.module.css';

export default function ModalContent({ onSave }) {
  const [view, setView] = useState('HabitChoiceModal');

  //   const params = useRouteMatch();
  //   const url = params.url;
  return (
    <>
      {view === 'HabitChoiceModal' && (
        <HabitChoiceModal onClick={setView} onClose={onSave} />
      )}
      {view === 'TemplateHabbit' && (
        <HabitTemplateModal onClick={setView} onClose={onSave} />
      )}
      {view === 'CustomHabbit' && <CustomHabbitModal onClose={onSave} />}
      {view === 'DailyResultModal' && <DailyResultModal onClose={onSave} />}
      {view === 'InterviewModal' && <InterviewModal onClose={onSave} />}

      {/* <div>Добавление новой привычки</div>
      <ul className={styles.list}>
        <li>
          <button type="button" onClick={() => setView('TemplateHabbit')}>
            Выбрать шаблонную привычку
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setView('CustomHabbit')}>
            Добавить свою привычку
          </button>
        </li>
      </ul> */}
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
