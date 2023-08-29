<template>
  <header class="header">
    <div>
      <div v-if="open" class="tabs-container">
        <ul>
          <li>
            <p @click="handleClick(0)" class="hover-pointer">Home</p>
          </li>
          <li>
            <p @click="handleClick(1)" class="hover-pointer">About</p>
          </li>
          <li>
            <p @click="handleClick(2)" class="hover-pointer">Projects</p>
          </li>
          <li>
            <p @click="handleClick(3)" class="hover-pointer">Socials</p>
          </li>
        </ul>
      </div>
    </div>
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
    const originalName = ref<string>("NIELS JUSTESEN");
    const name = ref<string>("NIELS JUSTESEN");
    const letters = ref<string>("ABCDEFGHIJKLMNOPQRSTUVXYZÆØÅ");
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
      iterations.value += 1 / 4;
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
