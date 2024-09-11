import { retrieveLaunchParams } from '@telegram-apps/sdk';
import axios from 'axios';

const { initDataRaw } = retrieveLaunchParams();

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE as string,
  headers: {
    authorization: `tma ${initDataRaw ?? ''}`,
    'Content-Type': 'application/json',
  },
});