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
import AddHabbit from '../AddHabbit/AddHabbit';
import TemplateHabbit from '../TemplateHabbit/TemplateHabbit';
import CustomHabbit from '../CustomHabbit/CustomHabbit';
import CigaretteAmount from '../CigaretteAmount/CigaretteAmount';
import QuestionsModal from '../QuestionsModal/QuestionsModal';
import styles from './ModalContent.module.css';

export default function ModalContent({ onSave }) {
  const [view, setView] = useState('AddHabbit');

  //   const params = useRouteMatch();
  //   const url = params.url;
  return (
    <>
      {view === 'AddHabbit' && <AddHabbit onClick={setView} onClose={onSave} />}
      {view === 'TemplateHabbit' && (
        <TemplateHabbit onClick={setView} onClose={onSave} />
      )}
      {view === 'CustomHabbit' && <CustomHabbit onClose={onSave} />}
      {view === 'CigaretteAmount' && <CigaretteAmount onClose={onSave} />}
      {view === 'QuestionsModal' && <QuestionsModal onClose={onSave} />}

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
