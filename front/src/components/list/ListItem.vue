<template>
  <q-card class="my-card card-container">
    <q-item tag="div" class="flex justify-between items-center card-header">
      <p class="card-title">{{ list.title }}</p>
      <q-btn flat round color="black" icon="more_horiz" />
    </q-item>
    <q-item tag="div" class="flex jusitfy-center items-center">
      <p class="no-task-message">
        Cette liste ne contient aucune tâches. Ajoutez en une depuis la liste
      </p>
    </q-item>
    <q-card-actions align="right">
      <router-link :to="'/lists'">
        <q-btn clickable flat round color="purple" icon="visibility" />
      </router-link>
      <q-btn flat round color="red" icon="favorite" />
      <q-btn flat round color="teal" icon="edit" />
    </q-card-actions>
  </q-card>
</template>
<script setup>
const props = defineProps({
  list: {
    default: {},
  },
});
</script>
<style lang="scss" scoped>
.card-container {
  margin-bottom: 20px;
}

.card-title {
  font-weight: bold;
  height: 0px;
  font-size: 16px;
}
.card-header {
  background: rgb(236, 236, 236);
  width: 100%;
}

.no-task-message {
  height: 0px;
}
</style>
