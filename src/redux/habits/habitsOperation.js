import axios from 'axios';
import habitsAction from './habitsAction';
import userOperation from '../user/userOperation';

const sendData = ({ id, name, data }, index, key = false) => {
  const newData = data;
  newData[index] = key;
  return {
    id: id,
    name: name,
    data: newData,
  };
};

const setData = data => dispatch => {
  // dispatch(habitsAction.setHabitsDataRequest());
  axios
    .patch('/habits', {
      id: '5f74b4af9394970017f7a655',
      name: 'Test water',
      data: [true, null, false, true, null, null],
    })
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
};

const setSetting = id => dispatch => {
  // console.log('id', id);
};

export default { setData, setSetting };
