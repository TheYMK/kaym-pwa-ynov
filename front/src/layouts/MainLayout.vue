<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated>
      <q-toolbar>
        <div class="bottom-menu">
          <q-btn
            flat
            dense
            round
            color="black"
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-btn round class="menu-button" icon="add" @click="prompt = true" />
          <q-btn
            flat
            dense
            round
            color="black"
            icon="person"
            aria-label="Account"
          />
        </div>
      </q-toolbar>
    </q-footer>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Mes listes </q-item-label>
        <div class="drawer-button-container">
          <q-btn
            class="full-width drawer-button"
            label="Créer une liste"
            @click="prompt = true"
          />
        </div>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <!-- Modal start -->
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Nom de la liste</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="listTitle"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-black">
          <q-btn flat label="Annuler" v-close-popup />
          <q-btn color="purple" label="Ajouter" @click="addToList" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Modal end -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { getAllLists, createList } from "services/lists";
const leftDrawerOpen = ref(false);
const essentialLinks = ref([]);
const prompt = ref(false);
const listTitle = ref("");

(async () => {
  const { data } = await getAllLists();
  essentialLinks.value = data.map((list) => {
    return {
      title: list.title,
      link: `/lists/${list._id}`,
    };
  });
})();

async function addToList() {
  await createList(listTitle.value);
  window.location = "/";
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
