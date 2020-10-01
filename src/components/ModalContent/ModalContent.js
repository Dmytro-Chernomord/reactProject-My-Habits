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

export default function ModalContent({ onSave, layout }) {
  const [view, setView] = useState(layout);

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
      {view !== 'InterviewModal' && (
        <button type="button" onClick={onSave}>
          Х
        </button>
      )}
    </>
  );
}
