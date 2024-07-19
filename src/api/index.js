import axios from "axios";

// Crie a instância do axios
const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

// Adicione um interceptor para adicionar o token de autenticação
api.interceptors.request.use(
  (config) => {
    const storedToken = localStorage?.getItem("token");
    if (storedToken) {
      const userToken = JSON.parse(storedToken);
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  (error) => {
    return Promise?.reject(error);
  }
);

export default api;
