<template>
  <header class="header">
    <div>
      <div @click="handleClick(null)" class="hover-pointer tabs-arrows">
        <img v-if="open" src="../assets/svg/OrSign.svg" alt="" />
        <img v-else src="../assets/svg/GreaterThanSign.svg" alt="" />
      </div>
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
    <h1>Niels Justesen</h1>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, ctx) {
    const open = ref<boolean>(false);
    const handleClick = (index: any) => {
      open.value = !open.value;
      if (index !== null) {
        ctx.emit("setDestination", index);
      }
    };
    return {
      open,
      handleClick,
    };
  },
});
</script>
