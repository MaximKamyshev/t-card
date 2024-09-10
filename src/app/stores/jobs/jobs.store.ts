import { create } from 'zustand'
import { JobsType } from '../../mocks/types'

export const useJobsStore = create((set) => ({
  jobs: [],
  updateJobs: (state: JobsType[]) => set({ jobs: state }),
  bookmarkJob: (id: string, state: JobsType[]) => set({ jobs: state.map(job => job.id === id ? { ...job, isBookmark: !job.isBookmark } : job) }),
}))