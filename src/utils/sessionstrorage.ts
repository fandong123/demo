
const TOKEN = 'token';

export function getToken() {
  return sessionStorage.getItem(TOKEN);
}

export function setToken(token: string) {
  return sessionStorage.setItem(TOKEN, token);
}

export function removeToken() {
  return sessionStorage.removeItem(TOKEN);
}