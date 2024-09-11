import { create } from 'zustand'
import { InitDataState } from '../types';

export const useInitDataStore = create((set) => ({
  user: {},
  platform: '',
  role: '',
  updateUser: (state: InitDataState) => set({ user: state }),
  updatePlatform: (state: string) => set({ platform: state }),
  updateRole: (state: string) => set({ role: state }),
}))