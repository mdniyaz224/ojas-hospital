import axios from 'axios';
import LocalStorageService from 'src/services/LocalStorageService';

axios.interceptors.request.use(
  (config: any) => {

    const tokenData = LocalStorageService.getAccessToken();
    if (tokenData) {
      const token = JSON.parse(tokenData).accessToken;
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },

  async (error: any) => {
    await Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async function (error: any) {
    if (!error.response) {
      // Store.dispatch({

      return await Promise.reject(error);
    }
    if (error.response.status === 403) {
      // Invalid token

      return Promise.reject(error);
    }
    if (error.response.status === 402) {

      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      // No token provided


      return Promise.reject(error);
    }

    if (error.response.status === 500) {

      return await Promise.reject(error);
    }

    return await Promise.reject(error.response);
  }
);

export default axios;
