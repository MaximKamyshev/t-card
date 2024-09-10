import { create } from 'zustand'

export const useModalStore = create((set) => ({
  isInviteModalOpen: false,
  isLanguageModalOpen: false,
  updateIsInviteModalOpen: (state: boolean) => set({ isInviteModalOpen: state }),
  updateIsLanguageModalOpen: (state: boolean) => set({ isLanguageModalOpen: state }),
}))