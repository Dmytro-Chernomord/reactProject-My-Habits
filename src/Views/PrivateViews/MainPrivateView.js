import { Route, Switch, NavLink } from 'react-router-dom';
import React, { Suspense, lazy, useState, useCallback } from 'react';
import routes from '../../routes';
import ProfilePage from '../PrivateViews/ProfilePage';
import Achievements from '../PrivateViews/Achievements';
import CheckListView from '../PrivateViews/CheckListView';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import Modal from '../../components/Modal/Modal';
import ModalContent from '../../components/ModalContent/ModalContent';

// const ChecklistView = lazy(() =>
//   import(
//     '../Views/AuthViews/ChecklistView' /* webpackChunkName: "checklist-view" */
//   ),
// );
export default function MainPrivateView() {
  const [view, setView] = useState('Checklist');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      <NavLink to={routes.checklist}>Checklist </NavLink>
      <NavLink to={routes.achievements}>Ach </NavLink>
      <NavLink to={routes.account}>Acc </NavLink>

      <LeftSideBar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path={routes.checklist} component={CheckListView} />
          <Route path={routes.achievements} component={Achievements} />
          <Route exact path={routes.account} component={ProfilePage} />
        </Switch>
      </Suspense>

      {view === 'Checklist' && <h2>ChecklistView from </h2>}
      {view === 'Account' && <h2>Account from </h2>}
      <button type="button" onClick={() => setView('Account')}>
        setView
      </button>
      <button type="button" onClick={() => setView('Checklist')}>
        setView
      </button>
      <div>RightSideBar</div>
      <button onClick={toggleModal} aria-label="Добавить привычку">
        Добавить привычку
      </button>
      <button onClick={toggleModal} aria-label="Сигареты за сегодня">
        Сигареты за сегодня
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContent onSave={toggleModal} />
        </Modal>
      )}
    </>
  );
}
