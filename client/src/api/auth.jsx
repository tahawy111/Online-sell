import jwtDecode from "jwt-decode";

let key = "token";

const setToken = (token) => localStorage.setItem(key, token);
const deleteToken = () => localStorage.removeItem(key);
const getToken = () => localStorage.getItem(key);
const getUser = () => {
  return getToken() && jwtDecode(getToken());
};

const authApi = { setToken, deleteToken, getToken, getUser };

export default authApi;
