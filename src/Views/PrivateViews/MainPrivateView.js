import React, { Suspense, lazy, useState, useCallback } from 'react';
import ModalBackdrop from '../../components/Modal/Modal';
import ModalContent from '../../components/ModalContent/ModalContent';

// const ChecklistView = lazy(() =>
//   import(
//     '../Views/AuthViews/ChecklistView' /* webpackChunkName: "checklist-view" */
//   ),
// );
export default function MainPrivateView() {
  const [showModal, setShowModal] = useState(false);
  const [layout, setLayout] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

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
          setLayout('DailyResultModal');
          toggleModal();
        }}
        aria-label="Сигареты за сегодня"
      >
        Сигареты за сегодня
      </button>
      {showModal && (
        <ModalBackdrop onClose={toggleModal}>
          <ModalContent onSave={toggleModal} layout={layout} />
        </ModalBackdrop>
      )}
    </>
  );
}
