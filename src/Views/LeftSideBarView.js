import React, { useState } from 'react';
// import LogoBox from '../components/LeftSideBar/LogoBox/LogoBox';
// import UserMenu from '../components/LeftSideBar/UserMenu/UserMenu';
// import TimeMoney from '../components/LeftSideBar/TimeMoney/TimeMoney';
// import NavigationBar from '../components/LeftSideBar/NavigationBar/NavigationBar';
import HabitsList from '../components/LeftSideBar/Habits/HabitsList';
import { Scroll } from '../components/Scroll/Scroll';
import Button from '../components/UIcomponents/Button/Button';
import HabitChoiceModal from '../components/HabitChoiceModal/HabitChoiceModal';
import HabitTemplateModal from '../components/HabitTemplateModal/HabitTemplateModal';
import CustomHabbitModal from '../components/CustomHabbitModal/CustomHabbitModal';
import LeftSideBarStatic from '../components/LeftSideBar/LeftSideBarstatic/LeftSideBarStatic';

// const LeftSideBarStatic = ({ match, onLogOut }) => {
//   return (
//     <div>
//       <LogoBox />
//       <UserMenu match={match} onLogOut={onLogOut} />
//       <TimeMoney />
//       <NavigationBar match={match} />
//       <h2>Привычки</h2>
//     </div>
//   );
// };

const LeftSideBarButton = ({ handelClick }) => {
  return (
    <Button
      label={'Добавить привычку +'}
      type={'button'}
      green={true}
      handelClick={handelClick}
    />
  );
};

export default function LeftSideBarView({ match, onLogOut }) {
  const [showChoiseModal, setShowChoiseModal] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customModalData, setCustomModalData] = useState('');

  const closeAllModals = () => {
    setShowChoiseModal(false);
    setShowTemplateModal(false);
    setShowCustomModal(false);
  };

  const returnToChoiseModal = () => {
    setShowTemplateModal(false);
    setShowChoiseModal(true);
  };

  const isTemplateModal = () => {
    setShowTemplateModal(prevShowModal => !prevShowModal);
  };

  const isCustomModal = () => {
    setShowCustomModal(prevShowModal => !prevShowModal);
  };

  const onChooseHabit = () => {
    setShowTemplateModal(false);
    setShowCustomModal(true);
  };

  const handelClick = () => {
    setCustomModalData('');
    setShowChoiseModal(true);
  };
  return (
    <>
      <Scroll
        match={match}
        onLogOut={onLogOut}
        handelClick={handelClick}
        staticComponentBefore={LeftSideBarStatic}
        scrolledComponent={HabitsList}
        staticComponentAfter={LeftSideBarButton}
      />
      {showChoiseModal && (
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
          onClose={closeAllModals}
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
      )}
    </>
  );
}
