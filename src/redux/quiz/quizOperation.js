import axios from 'axios';
import quizAction from './quizActions';

const quizComplete = userData => dispatch => {
  dispatch(quizAction.quizAddRequest());
  console.log(userData);
  axios
    .post('/users/updateQuizInfo', userData)
    .then(response => {
      dispatch(quizAction.quizAddSuccess(response.data));
    })
    .catch(error => {
      console.log(error.message);
      dispatch(quizAction.quizAddError(error.message));
    });
};

export default {
  quizComplete,
};
