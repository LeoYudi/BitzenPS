import axios, { AxiosError } from 'axios';
import { auth } from './auth';

import { CustomError } from './CustomError';

const api_url = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: api_url });

api.interceptors.request.use((config) => {
  if (!config.headers.Authorization)
    config.headers.Authorization = auth.token;

  return config;
})

api.interceptors.response.use(response => response, (error: AxiosError): CustomError => {
  if (error.code === 'ERR_NETWORK')
    throw new CustomError('Erro de conexão', 'ERR_NETWORK');

  if (error.code === 'ERR_CANCELED')
    throw new CustomError('Requisição cancelada', 'ERR_CANCELED');

  if (error.response) {
    throw new CustomError('', 'ERR_API', error.status, error.response.data);
  }

  throw new CustomError('Erro desconhecido', 'ERR_UNKNOWN');
})

export { api };

export type { CustomError }