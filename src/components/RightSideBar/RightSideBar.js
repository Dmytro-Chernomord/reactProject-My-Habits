import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Scroll } from '../Scroll/Scroll';
import { HabitsList } from './HabitsList/HabitsList';
import { Calendar } from './Сalendar/Calendar';
import InterviewModal from '../InterviewModal/InterviewModal';
import quizSelector from '../../redux/quiz/quizSelector';

export const RightSideBar = () => {
  const [showModal, setShowModal] = useState(false);
  const quizData = useSelector(quizSelector.getQuizResult);

  useEffect(() => {
    // Object.values(quizData).includes(0)
    quizData['cigarettePerDay'] === 0
      ? setShowModal(true)
      : setShowModal(false);
  }, [quizData]);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <Scroll staticComponent={Calendar} scrolledComponent={HabitsList} />
      {showModal && (
        <InterviewModal
          notAbleToClose={true}
          onClose={toggleModal}
          onClick={() => {
            toggleModal();
          }}
        ></InterviewModal>
      )}
    </>
  );
};
