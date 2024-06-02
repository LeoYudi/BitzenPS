const localStorageKey = 'auth';

const loadAuthFromStorage = () => {
  const authStorage = localStorage.getItem(localStorageKey);

  if (authStorage) {
    const authObject = JSON.parse(authStorage);
    return authObject;
  }

  return {};
}

let auth = loadAuthFromStorage();

const setAuthOnStorage = (values: object) => {
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  auth = values;
}

const notAuthenticatedRedirect = () => {
  window.location.href = '/login';
  localStorage.removeItem(localStorageKey);
}

export { auth, notAuthenticatedRedirect, setAuthOnStorage };