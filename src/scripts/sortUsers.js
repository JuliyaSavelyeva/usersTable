import { getRenderUsers } from './renderUsers.js';

export const nameElem = document.querySelector('.table__name');
export const usernameElem = document.querySelector('.table__username');

export const onSort = (users, name) => {
  nameElem.classList.toggle('sort');

  if (!nameElem.classList.contains('sort')) {
    getRenderUsers(users);
    return;
  }

  const sortUsers = users.slice().sort((a, b) => {
    const key = name === 'name' ? a.name : a.username;
    const keyNext = name === 'name' ? b.name : b.username;
    return key.localeCompare(keyNext);
  });

  getRenderUsers(sortUsers);
};
