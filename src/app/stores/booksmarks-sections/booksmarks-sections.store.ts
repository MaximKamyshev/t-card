import { create } from 'zustand'

export const useBookmarksSectionsStore = create((set) => ({
  currentSection: 'vacancies',
  updateCurrentSection: (state: string) => set({ currentSection: state }),
}))