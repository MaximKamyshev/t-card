import { create } from 'zustand'
import { createApi } from '../../api'

export const useApiStore = create(() => ({
  api: createApi(),
}))