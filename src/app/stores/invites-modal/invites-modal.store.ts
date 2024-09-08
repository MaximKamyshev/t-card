import { create } from 'zustand'

export const useInvitesModalStore = create((set) => ({
  isOpen: false,
  updateState: (state: boolean) => set({ isOpen: state }),
}))