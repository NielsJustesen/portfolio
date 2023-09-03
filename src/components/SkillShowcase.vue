<template>
  <div class="skill-showcase">
    <button @click="handleClick(1)">Go back</button>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const handleClick = (number: number) => {};
    return { handleClick };
  },
};
</script>
