import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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
import transitionStyles from '../components/ModalContent/ModalTransition.module.css';

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
  const [openModal, setOpenModal] = useState('');

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

  const handelClick = value => {
    setCustomModalData('');
    setOpenModal(value);
  };
  return (
    <>
      <Scroll
        match={match}
        onLogOut={onLogOut}
        handelClick={() => handelClick('add')}
        staticComponentBefore={LeftSideBarStatic}
        scrolledComponent={HabitsList}
        staticComponentAfter={LeftSideBarButton}
        isLeftBar={true}
      />
      <CSSTransition
        in={openModal === 'add'}
        timeout={250}
        classNames={transitionStyles}
        unmountOnExit
      >
        <HabitChoiceModal
          // isTemplateModal={isTemplateModal}
          // isCustomModal={isCustomModal}
          onClose={() => handelClick('')}
          openCustom={() => handelClick('custom')}
          openTemplate={() => handelClick('template')}
        ></HabitChoiceModal>
      </CSSTransition>
      {/* {openModal === 'add' && (
        
      )} */}
      <CSSTransition
        in={openModal === 'template'}
        timeout={250}
        classNames={transitionStyles}
        unmountOnExit
      >
        <HabitTemplateModal
          addData={setCustomModalData}
          goBack={() => handelClick('add')}
          onChooseHabit={() => handelClick('custom')}
          onClose={() => handelClick('')}
          // onClick={() => {
          //   closeAllModals();
          // }}
        ></HabitTemplateModal>
      </CSSTransition>
      {/* {openModal === 'template' && (
      
      )} */}
      <CSSTransition
        in={openModal === 'custom'}
        timeout={250}
        classNames={transitionStyles}
        unmountOnExit
      >
        <CustomHabbitModal
          habitName={customModalData}
          // isTemplateModal={isTemplateModal}
          // isCustomModal={isCustomModal}
          onClose={() => handelClick('')}
          // onClick={() => {
          //   closeAllModals();
          // }}
        ></CustomHabbitModal>
      </CSSTransition>
      {/* {openModal === 'custom' && (
       
      )} */}
    </>
  );
}
