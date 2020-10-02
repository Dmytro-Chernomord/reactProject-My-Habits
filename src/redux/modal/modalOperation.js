import actions from './modalActions';

const toggleModal = () => dispatch => {
  console.log('Hi');

  dispatch(actions.toggleModal());
};

export default { toggleModal };
