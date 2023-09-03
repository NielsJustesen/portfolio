<template>
  <header class="header">
    <h1>
      <div class="corner"></div>
      {{ name }}
    </h1>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, ctx) {
    const open = ref<boolean>(false);
    const originalName = ref<string>("Full Stack Web Developer");
    const name = ref<string>("Full Stack Web Developer");
    const letters = ref<string>(
      "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"
    );
    const iterations = ref<number>(0);

    const interval = setInterval(() => {
      name.value = name.value
        .split("")
        .map((letter, index) => {
          if (index < iterations.value) {
            return originalName.value[index];
          }
          return letters.value[
            Math.floor(Math.random() * letters.value.length)
          ];
        })
        .join("");
      if (iterations.value >= originalName.value.length) {
        clearInterval(interval);
      }
      iterations.value += 1 / 2;
    }, 30);
    const handleClick = (index: any) => {
      open.value = !open.value;
      if (index !== null) {
        ctx.emit("setDestination", index);
      }
    };

    return {
      open,
      name,
      originalName,
      handleClick,
    };
  },
});
</script>
