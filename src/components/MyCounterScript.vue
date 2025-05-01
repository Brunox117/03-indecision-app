<template>
  <section>
    <h3 className="text-3xl font-bold underline">Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="addCounter">+1</button>
      <button class="btn" @click="minusCounter">-1</button>
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
.btn {
  @apply p-5 bg-blue-500 rounded mr-3 hover:bg-blue-700;
}
</style>
