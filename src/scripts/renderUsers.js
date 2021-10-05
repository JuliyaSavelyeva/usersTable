export const getRenderUsers = users => {
  const tableElement = document.querySelector('.users__body');

  const renderUsers = users.map((element, index) => {
    tableElement.innerHTML = '';

    const trElem = document.createElement('tr');
    trElem.setAttribute('data-id', element.id);
    trElem.classList.add('user');

    const elementsEmpty = [];

    const tdIndex = document.createElement('td');
    tdIndex.classList.add('index');
    tdIndex.textContent = index + 1;

    const tdUserName = document.createElement('td');
    tdUserName.classList.add('user__name');
    tdUserName.textContent = element.name;

    const tdUserUserName = document.createElement('td');
    tdUserUserName.classList.add('user__username');
    tdUserUserName.textContent = element.username;

    const tdUserEmail = document.createElement('td');
    tdUserEmail.classList.add('user__email');
    tdUserEmail.textContent = element.email;

    const tdUserWebsite = document.createElement('td');
    tdUserWebsite.classList.add('user__website');
    tdUserWebsite.textContent = element.website;

    const tdElements = elementsEmpty.concat(
      tdIndex,
      tdUserName,
      tdUserUserName,
      tdUserEmail,
      tdUserWebsite,
    );

    trElem.append(...tdElements);
    return trElem;
  });

  tableElement.append(...renderUsers);
};
