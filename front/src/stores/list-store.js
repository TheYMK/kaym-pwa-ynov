import { defineStore } from 'pinia'
import { getAllLists, createList } from 'src/services/lists'

export const useLists = defineStore('todos', {
  state: () => ({
    lists: [],
  }),
  getters: {
    async getAllLists(state) {
      try {
        const res = await getAllLists();
        return res.data;
      } catch (err) {
        console.log('Failed to retrieve lists: ', err)
        return []
      }
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    async addList(title) {
      try {
        const { data } = await createList(title)
        if (data) {
          this.lists.push(data)
        }
      } catch (err) {
        console.log('Failed to retrieve lists: ', err)
      }

    },
  },
})
