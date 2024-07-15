const TOKEN_KEY = "sal_token";

function getLocalStorageToken() {
  return localStorage.getItem(TOKEN_KEY);
}
function setLocalStorageToken(token: string) {
  return localStorage.setItem(TOKEN_KEY, token);
}
function removeLocalStorageToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export { getLocalStorageToken, setLocalStorageToken, removeLocalStorageToken };
