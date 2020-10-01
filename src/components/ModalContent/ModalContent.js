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
  { id: '001', name: 'Начинать утро с 10-15 минутной зарядки' },
  { id: '002', name: 'Планировать свой день' },
  { id: '003', name: 'Вставать на 30 мин раньшьше обычного' },
  { id: '004', name: 'Читать минимум 30 мин в день' },
  { id: '005', name: 'Замена выкуриной сигареты половинкой киви' },
  { id: '006', name: 'Принять контрасный душ' },
  { id: '007', name: '5 минутная зарядка для глаз (обед)' },
  {
    id: '008',
    name: '25 минут полной концентрации на работе и 5 минут отдыха',
  },
  { id: '009', name: 'Раз в неделлю проводить медитацию' },
  { id: '010', name: 'Начинать робочий день с подготовки рабочего места' },
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
