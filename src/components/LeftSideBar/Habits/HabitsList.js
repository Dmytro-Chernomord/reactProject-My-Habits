import HabitsListItem from '../HabitsListItem/HabitsListItem';
import { useSelector } from 'react-redux';
import styles from './habitsList.module.css';
import React, { useState } from 'react';
// import HabitChoiceModal from '../../HabitChoiceModal/HabitChoiceModal';
// import CustomHabbitModal from '../../CustomHabbitModal/CustomHabbitModal';
// import HabitTemplateModal from '../../HabitTemplateModal/HabitTemplateModal';
// import Button from '../../UIcomponents/Button/Button';

export default function HabitsList() {
  // const [showChoiseModal, setShowChoiseModal] = useState(false);
  // const [showTemplateModal, setShowTemplateModal] = useState(false);
  // const [showCustomModal, setShowCustomModal] = useState(false);
  // const [customModalData, setCustomModalData] = useState('');

  // const closeAllModals = () => {
  //   setShowChoiseModal(false);
  //   setShowTemplateModal(false);
  //   setShowCustomModal(false);
  // };

  // const returnToChoiseModal = () => {
  //   setShowTemplateModal(false);
  //   setShowChoiseModal(true);
  // };

  // const isTemplateModal = () => {
  //   setShowTemplateModal(prevShowModal => !prevShowModal);
  // };

  // const isCustomModal = () => {
  //   setShowCustomModal(prevShowModal => !prevShowModal);
  // };

  // const onChooseHabit = () => {
  //   setShowTemplateModal(false);
  //   setShowCustomModal(true);
  // };

  const { habits } = useSelector(state => state);

  // const handelClick = () => {
  //   setCustomModalData('');
  //   setShowChoiseModal(true);
  // };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Привычки</h2>
        <ul className={styles.habitsList}>
          {habits.map(({ _id, name }) => (
            <HabitsListItem key={_id} text={name} />
          ))}
        </ul>
      </div>

      {/* <Button
        handelClick={handelClick}
        label={'Добавить привычку +'}
        type={'button'}
        green={true}
      />
 */}
      {/* {showChoiseModal && (
        <HabitChoiceModal
          isTemplateModal={isTemplateModal}
          isCustomModal={isCustomModal}
          onClose={closeAllModals}
          onClick={() => {
            closeAllModals();
          }}
        ></HabitChoiceModal>
      )}
      {showTemplateModal && (
        <HabitTemplateModal
          addData={setCustomModalData}
          goBack={returnToChoiseModal}
          onChooseHabit={onChooseHabit}
          onClick={() => {
            closeAllModals();
          }}
        ></HabitTemplateModal>
      )}
      {showCustomModal && (
        <CustomHabbitModal
          habitName={customModalData}
          isTemplateModal={isTemplateModal}
          isCustomModal={isCustomModal}
          onClose={closeAllModals}
          onClick={() => {
            closeAllModals();
          }}
        ></CustomHabbitModal>
      )} */}
    </div>
  );
}
