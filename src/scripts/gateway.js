const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json(response);
    }
    throw new Error('Some Error');
  });

export const getDetailsUser = id =>
  fetch(`${baseUrl}/${id}`).then(response => {
    if (response.ok) {
      return response.json(response);
    }
    throw new Error('Some Error');
  });
