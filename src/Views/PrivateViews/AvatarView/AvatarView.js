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

{
  /* <h2>Вы действительно хотите изменить аватар?</h2>
      <p>Выбраный аватар:</p>
      {avatars.map(el => {
        if (id === el.id) {
          return <img key={el.id} src={el.avatar} alt="avatar" width='108' />;
        }
      })}
      <button type="button">Изменить</button>
      <button type="button" onClick={onClose}>
        Отмена
      </button> */
}
