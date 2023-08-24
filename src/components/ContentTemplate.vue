<template>
  <div class="content-container" :id="id">
    <div class="content-info">
      <h2>{{ headline }}</h2>
      <p>{{ content }}</p>
    </div>
    <div class="content-images">Images</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      required: true,
      type: String,
    },
    headline: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
    images: {
      required: false,
      type: Array,
    },
    links: {
      required: false,
      type: Array,
    },
  },
  setup() {
    return {};
  },
});
</script>
