import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './AvatarView.module.css';
import Header from '../../../components/Header/Header';
import userOperation from '../../../redux/user/userOperation';
import avatars from '../../../avatars';

function AvatarView({ toggleModal, changeLayout }) {
  const dispatch = useDispatch();

  const handleClick = e => {
    const { dataset } = e.target;
    toggleModal();
    changeLayout('AvatarsModal');
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
    </>
  );
}

export default AvatarView;
