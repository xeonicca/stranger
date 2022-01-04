import { defineStore } from 'pinia'

// 問題列表
import { fetchActiveQuestions } from '@/services/explore/api'
// 故事列表
import { fetchStories } from '@/services/explore/api'

export const useMain = defineStore('main', {
  state: () => ({
    ponderList: [],
    storyList: [],
  }),

  actions: {
    async fetchPonderList() {
      let list = await fetchActiveQuestions()
      this.ponderList = list
    },

    async fetchStoryList() {
      let list = await fetchStories()
      this.storyList = list
    },
  },
})