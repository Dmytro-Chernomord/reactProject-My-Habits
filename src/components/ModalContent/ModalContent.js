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

const templateHabits = [
  { id: '001', name: 'смотреть в окно' },
  { id: '002', name: 'гладить кота' },
  { id: '003', name: 'мыть пол' },
  { id: '004', name: 'делать уборку' },
  { id: '005', name: 'читать книги' },
  { id: '006', name: 'помогать соседке' },
];

export default function ModalContent({ onSave, layout, ableToDelete }) {
  const [view, setView] = useState(layout);
  const [data, setData] = useState('');

  return (
    <div className={styles.modalWrapper}>
      {view === 'HabitChoiceModal' && (
        <HabitChoiceModal onClick={setView} onClose={onSave} />
      )}
      {view === 'HabitTemplateModal' && (
        <HabitTemplateModal
          onClick={setView}
          addData={setData}
          onClose={onSave}
          habits={templateHabits}
        />
      )}
      {view === 'CustomHabbitModal' && (
        <CustomHabbitModal
          onClose={onSave}
          ableDelete={ableToDelete}
          habitInfo={data}
        />
      )}
      {view === 'DailyResultModal' && <DailyResultModal onClose={onSave} />}
      {view === 'InterviewModal' && <InterviewModal onClose={onSave} />}
      {view !== 'InterviewModal' && (
        <p onClick={onSave} className={styles.modalCloseBtn}>
          <svg
            xmlns="../../images/svg-icons/close.svg"
            width="16px"
            height="16px"
          ></svg>
        </p>
      )}
    </div>
  );
}
