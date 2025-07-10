import axios from 'axios';
import i18n from '../../i18n';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for authentication
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      window.location.href = '/login';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response || {};

    switch (status) {
      case 401:
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        break;
      case 403:
        alert(i18n.t('errorMessage.forbidden'));
        break;
      case 404:
        alert(i18n.t('errorMessage.notFound'));
        break;
      case 500:
        alert(i18n.t('errorMessage.serverError'));
        break;
      default:
        alert(i18n.t('errorMessage.unknownError'));
        break;
    }
    return Promise.reject(error);
  }
);

export default apiClient;
