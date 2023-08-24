<template>
  <button @click="testMethod(1)">Click me</button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const test = ref(1);
    const testMethod = (number: number) => {
      console.log(number);
    };
    return { testMethod, test };
  },
};
</script>
