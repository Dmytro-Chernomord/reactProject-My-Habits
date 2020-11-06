import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalBackdrop from '../../components/Modal/Modal';
import ModalContent from '../../components/ModalContent/ModalContent';
import toggle from '../../redux/modal/modalOperation';
import modalSelector from '../../redux/modal/modalSelector';

export default function MainPrivateView() {
  const showModal = useSelector(modalSelector.getModal);
  const dispatch = useDispatch();
  const [layout, setLayout] = useState(false);
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);

  const toggleModal = () => dispatch(toggle.toggleModal());

  return (
    <>
      <button
        onClick={() => {
          setLayout('HabitChoiceModal');
          toggleModal();
        }}
        aria-label="Добавить привычку"
      >
        Добавить привычку
      </button>
      <button
        onClick={() => {
          setLayout('CustomHabbitModal');
          toggleModal();
          setIsAbleToDelete(true);
        }}
        aria-label="Добавить привычку"
      >
        Редактировать привычку
      </button>
      <button
        onClick={() => {
          setLayout('DailyResultModal');
          toggleModal();
        }}
        aria-label="Сигареты за сегодня"
      >
        Сигареты за сегодня
      </button>
      {showModal && (
        <ModalBackdrop onClose={toggleModal}>
          <ModalContent
            onSave={toggleModal}
            layout={layout}
            ableToDelete={isAbleToDelete}
          />
        </ModalBackdrop>
      )}
    </>
  );
}
