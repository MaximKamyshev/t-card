import { create } from 'zustand'

export const useModalStore = create((set) => ({
  isInviteModalOpen: false,
  isLanguageModalOpen: false,
  isApplyModalOpen: false,
  isPresentModalOpen: false,
  updateIsInviteModalOpen: (state: boolean) => set({ isInviteModalOpen: state }),
  updateIsLanguageModalOpen: (state: boolean) => set({ isLanguageModalOpen: state }),
  updateIsApplyModalOpen: (state: boolean) => set({ isApplyModalOpen: state }),
  updateIsPresentModalOpen: (state: boolean) => set({ isPresentModalOpen: state }),
}))