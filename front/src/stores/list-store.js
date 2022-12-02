// import { defineStore } from 'pinia'
// import { getAllLists, createList } from 'src/services/lists'
// import { ref, computed } from "vue";

// export const useListsStore = defineStore('lists', () => {
//   const lists = ref([])
//   const getLists = computed(() => lists.value)

//   async function getAllLists() {
//     try {
//       const res = await getAllLists();
//       lists = res.data.map((list) => {
//         return {
//           title: list.title,
//           link: `/lists?id=${list._id}`,
//         };
//       });

//       return lists
//     } catch (err) {
//       console.log('Failed to retrieve lists: ', err)
//       return []
//     }
//   }
//   async function addList() {
//     try {
//       const { data } = await createList(title)
//       await getAllLists()
//     } catch (err) {
//       console.log('Failed to retrieve lists: ', err)
//     }
//   }

//   return { lists, getLists, getAllLists, addList }
// })

