import { defineStore } from 'pinia';
import { ref } from 'vue';

const useIndexStore:any = defineStore('index', () => {
  const counter = ref(0);
  const increment = () => {
    counter.value++;
  };
  return {
    counter,
    increment
  };
});

export default useIndexStore;
