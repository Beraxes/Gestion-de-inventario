import axios from "axios";

const API_URL = "http://localhost:5000/api";

const register = async (name, username, email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    username,
    email,
    password,
  });
  return response.data;
};

const login = async (emailOrUsername, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { emailOrUsername, password });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

const requestWithAuth = async (method, url, data = {}) => {
  const user = getCurrentUser();
  if (!user || !user.token) {
    throw new Error("No está autenticado");
  }
  return axios({
    method,
    url: `${API_URL}${url}`,
    data,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  requestWithAuth,
};

export default AuthService;