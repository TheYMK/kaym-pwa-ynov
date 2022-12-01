<template></template>
<script setup>
// Syntax vue3 Composition API
import { ref, computed } from "vue";
import { getSingleList } from "services/lists";
import route from "../router/index";

const list = ref({});

function getListDetail() {
  console.log(window.location.href);
}

getListDetail();
</script>
