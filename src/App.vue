<template>
  <h1>Mi primera app</h1>
  <hr />
  <MyCounter />
  <MyCounterScript :value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>

<style scoped>
h1 {
  color: green;
}
</style>
