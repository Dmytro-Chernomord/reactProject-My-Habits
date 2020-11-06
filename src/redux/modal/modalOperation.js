import actions from './modalActions';

const toggleModal = () => dispatch => {
  dispatch(actions.toggleModal());
};

export default { toggleModal };
