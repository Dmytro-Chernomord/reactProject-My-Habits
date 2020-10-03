import React from 'react';
import { useSelector } from 'react-redux';
import userSelector from '../../redux/user/userSelector';
import avatarDefault from '../../images/avatars/avatar001.png';
import avatars from '../../avatars';

const AvatarUser = ({ width }) => {
  const state = useSelector(state => state);
  const avatar = userSelector.getAvatar(state);
  return (
    <>
      {avatar === '' ? (
        <img src={avatarDefault} alt="avatar" width={width} />
      ) : (
        <>
          {avatars.map(el => {
            if (avatar === el.id) {
              return (
                <img key={el.id} src={el.avatar} alt="avatar" width={width} />
              );
            }
          })}
        </>
      )}
    </>
  );
};

export default AvatarUser;
