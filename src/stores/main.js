import { defineStore } from 'pinia'

// 問題列表
import { fetchActiveQuestions } from '@/services/explore/api'
// 故事列表
import { fetchStories } from '@/services/story/api'

export const useMain = defineStore('main', {
  state: () => ({
      ponderList: [],
      storyList: [],
    }),

  actions: {
    async fetchPonderList(count = 30) {
      let list = await fetchActiveQuestions(count)
      this.ponderList = list
    },

    async fetchStoryList() {
      let list = await fetchStories()
      this.storyList = list
    },
  },
})