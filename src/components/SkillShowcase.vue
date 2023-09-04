<template>
  <div class="skill-showcase">
    <button @click="handleClick()">Go back</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    skillToShow: {
      required: true,
      type: String,
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("StopShowcase", "stop");
    };
    return { handleClick };
  },
});
</script>
