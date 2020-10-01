import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('modal/open');
const toggleModal = createAction('modal/toggle');

export default {
  openModal,
  toggleModal,
};
