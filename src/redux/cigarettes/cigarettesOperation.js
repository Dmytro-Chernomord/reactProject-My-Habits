import axios from 'axios';
import cigarettesActions from './cigarettesActions';

const postDayCigarettes = userData => dispatch => {
  dispatch(cigarettesActions.cigarettesAddRequest());

  axios
    .post('/users/updateCigarettes', userData)
    .then(response => {
      console.log(response);

      dispatch(cigarettesActions.cigarettesAddSuccess(response.data.data));
    })
    .catch(error =>
      dispatch(cigarettesActions.cigarettesAddError(error.message)),
    );
};

export default {
  postDayCigarettes,
};
