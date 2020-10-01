import React, { Suspense, lazy, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import routes from '../../routes';
import ProfilePage from '../PrivateViews/ProfilePage';
import Achievements from './Achievements';
import CheckListView from '../PrivateViews/CheckListView';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Modal from '../../components/Modal/Modal';
import ModalBackdrop from '../../components/Modal/Modal';
import ModalContent from '../../components/ModalContent/ModalContent';
import toggle from '../../redux/modal/modalOperation';
import modalSelector from '../../redux/modal/modalSelector';

// const ChecklistView = lazy(() =>
//   import(
//     '../Views/AuthViews/ChecklistView' /* webpackChunkName: "checklist-view" */
//   ),
// );
export default function MainPrivateView() {
  const showModal = useSelector(modalSelector.getModal);
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  const [layout, setLayout] = useState(false);
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);
  console.log(showModal);
  // const toggleModal = useCallback(() => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // }, []);
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
