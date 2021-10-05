import { getDetailsUser } from './gateway.js';

export const userElem = document.querySelector('.users__body');
export const modal = document.querySelector('.modal');
const listElem = document.querySelector('.user-details');

export async function onShowModal(e) {
  listElem.innerHTML = '';
  modal.style.display = 'block';
  setTimeout(() => {
    modal.style.opacity = 1;
    modal.style.transform = 'translateY(-10px)';
  }, 20);

  const id = e.target.closest('.user').dataset.id;
  const user = await getDetailsUser(id);

  const details = Object.entries(user.address).map(elem => {
    const liElem = document.createElement('li');
    if (typeof elem[1] === 'object') {
      liElem.innerHTML = `geo <ul class="user-details_sublist">
      <li>lat ${elem[1].lat}</li>
      <li>lng ${elem[1].lng}</li></ul>`;
      return liElem;
    }
    liElem.textContent = `${elem[0]} - ${elem[1]}`;
    return liElem;
  });

  listElem.append(...details);
}
