export function loginUser(username) {
  const user = getUser(username) ?? { username, todos: [] };
  localStorage.setItem(username, JSON.stringify(user));
  localStorage.setItem('last-login', username);

  return user;
}

export function getUser(username = '') {
  const lastLogin = localStorage.getItem('last-login');
  let user = null;

  if (username) user = JSON.parse(localStorage.getItem(username));
  else user = JSON.parse(localStorage.getItem(lastLogin));

  console.log({ user });

  return user;
}

export function setUserTodos(username, todos) {
  const user = getUser(username);

  if (user) {
    localStorage.setItem(username, JSON.stringify({ ...user, todos }));
  }
}
