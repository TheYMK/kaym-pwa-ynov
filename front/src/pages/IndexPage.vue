<template>
  <q-page class="flex column">
    <q-item
      tag="div"
      class="top-navigation flex row justify-between full-width items-center"
    >
      <h1 class="text-h6">Dashboard</h1>
      <q-btn
        flat
        dense
        round
        size="lg"
        color="grey"
        icon="account_circle"
        aria-label="Account"
      />
    </q-item>
    <q-item tag="div" class="welcome-message-container">
      <h1 class="welcome-message">Bonjour, Kassai 👻</h1>
    </q-item>
    <q-item tag="div" class="flex column">
      <ListItem v-for="list in lists" :key="list.title" :list="list" />
    </q-item>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { getAllLists } from "services/lists";
import ListItem from "components/list/ListItem.vue";
// import { useLists } from "@/stores/list-store";

const props = defineProps({
  lists: {
    type: Array,
    default: [],
  },
});

const lists = ref(props.lists);

(async () => {
  const { data } = await getAllLists();
  lists.value = data.map((list) => {
    return {
      title: list.title,
      link: `/lists/${list._id}`,
    };
  });
})();
</script>

<style lang="scss" scoped>
.welcome-message-container {
  margin-bottom: 20px;
}

.welcome-message {
  width: 100%;
  font-size: 40px;
  font-weight: bolder;
}
</style>
