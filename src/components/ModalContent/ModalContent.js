import React, { useState } from 'react';
import HabitChoiceModal from '../HabitChoiceModal/HabitChoiceModal';
import HabitTemplateModal from '../HabitTemplateModal/HabitTemplateModal';
import CustomHabbitModal from '../CustomHabbitModal/CustomHabbitModal';
import DailyResultModal from '../DailyResultModal/DailyResultModal';
import InterviewModal from '../InterviewModal/InterviewModal';
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from './ModalContent.module.css';

const templateHabits = [
  { id: '001', name: 'Начинать утро с 10-15 минутной зарядки' },
  { id: '002', name: 'Планировать свой день' },
  { id: '003', name: 'Вставать на 30 мин раньше обычного' },
  { id: '004', name: 'Читать минимум 30 мин в день' },
  { id: '005', name: 'Замена выкуренной сигареты половинкой киви' },
  { id: '006', name: 'Принять контрастный душ' },
  { id: '007', name: '5-минутная зарядка для глаз (обед)' },
  {
    id: '008',
    name: '25 минут полной концентрации на работе и 5 минут отдыха',
  },
  { id: '009', name: 'Раз в неделю проводить медитацию' },
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
      {view === 'ChangePasswordModal' && (
        <ChangePasswordModal onClose={onSave} />
      )}
      {view === 'InterviewModal' && <InterviewModal onClose={onSave} />}
      {view !== 'InterviewModal' && (
        <ButtonClose type="button" onClick={onSave} />
      )}
    </div>
  );
}
