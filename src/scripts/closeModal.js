import { modal } from './modal.js';

export const closeElem = document.querySelector('.close');

export const onCloseModal = () => {
  modal.style.display = 'none';
  modal.style.opacity = 0;
  modal.style.transform = 'translateY(0px)';
};
