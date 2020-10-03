import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AvatarView.module.css';
import Header from '../../../components/Header/Header';
import userOperation from '../../../redux/user/userOperation';
import avatars from '../../../avatars';
import AvatarsModal from '../../../components/AvatarsModal/AvatarsModal';

function AvatarView({ onClose, changeLayout }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handleClick = e => {
    const { dataset } = e.target;
    toggleModal();
    // changeLayout('AvatarsModal');
    dispatch(userOperation.addUserInfo({ avatar: dataset.id }));
  };

  return (
    <>
      <Header title="Выбрать другой аватар"></Header>
      <div className={styles.boxListAvatars}>
        <ul className={styles.listAvatars}>
          {avatars.map(avatar => {
            return (
              <li key={avatar.id} className={styles.itemAvatars}>
                <img
                  src={avatar.avatar}
                  alt="avatar"
                  width="157"
                  height="157"
                  data-id={avatar.id}
                  onClick={handleClick}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {showModal && (
        <AvatarsModal
          onClose={toggleModal}
          // onClick={() => {
          //   setTemplateHabit();
          //   toggleModal();
          // }}
        >
          {/* <ModalContent
            onSave={toggleModal}
            layout={layout}
            // ableToDelete={isAbleToDelete}
          /> */}
        </AvatarsModal>
      )}
    </>
  );
}

export default AvatarView;
