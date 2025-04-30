<template>
  <section>
    <h3 className="text-3xl font-bold underline">Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="add1">+1</button>
      <button class="btn" @click="minus1">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const add1 = () => {
      counter.value += 1;
    };
    const minus1 = () => {
      counter.value -= 1;
    };
    const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
      add1,
      minus1,
    };
  },
});
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded mr-3 hover:bg-blue-700;
}
</style>
