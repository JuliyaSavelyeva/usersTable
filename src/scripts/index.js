import { getUsers } from './gateway.js';
import { getRenderUsers } from './renderUsers.js';
import { onShowModal, userElem } from './modal.js';
import { onCloseModal, closeElem } from './closeModal.js';
import { onSort, nameElem, usernameElem } from './sortUsers.js';

const bodyElem = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
  getUsers().then(users => getRenderUsers(users));
});

userElem.addEventListener('click', onShowModal);
closeElem.addEventListener('click', onCloseModal);

nameElem.addEventListener('click', e => {
  getUsers().then(users => onSort(e, users, 'name'));
});

usernameElem.addEventListener('click', () => {
  getUsers().then(users => onSort(users, 'username'));
});

bodyElem.addEventListener('click', e => {
  if (!e.target.closest('.user')) {
    onCloseModal();
  }
});
