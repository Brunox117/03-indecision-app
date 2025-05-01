import { computed, ref } from 'vue';

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);
  const addCounter = () => {
    counter.value = counter.value + 1;
  };
  const minusCounter = () => {
    counter.value = counter.value - 1;
  };
  return { counter, squareCounter, addCounter, minusCounter };
};
