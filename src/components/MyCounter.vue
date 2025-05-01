<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="addCounter">+1</button>
      <button @click="minusCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value?: number;
}

const props = defineProps<Props>();
const { counter, squareCounter, addCounter, minusCounter } = useCounter(props.value ?? 0);
</script>

<style scoped>
h1 {
  color: green;
}
</style>
