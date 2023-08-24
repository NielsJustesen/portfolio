<template>
  <div class="app">
    <HeaderTemplate @setDestination="changePage" />
    <div class="content-container-list">
      <ContentTemplate
        :id="'home'"
        :headline="'Home'"
        :content="''"
        class="show-content-container"
      />
      <ContentTemplate
        :id="'about'"
        :headline="'About'"
        :content="''"
        class="pan-right-content-container"
      />
      <ContentTemplate
        :id="'projects'"
        :headline="'Projects'"
        :content="''"
        class="pan-left-content-container"
      />
      <ContentTemplate
        :id="'socials'"
        :headline="'Socials'"
        :content="''"
        class="pan-right-content-container"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderTemplate from "./components/HeaderTemplate.vue";
import ContentTemplate from "./components/ContentTemplate.vue";
export default defineComponent({
  name: "App",
  components: { HeaderTemplate, ContentTemplate },
  setup() {
    const pageView = ref<number>(0);
    const changePage = (index: number) => {
      pageView.value = index;
      console.log(index);
    };
    return {
      pageView,
      changePage,
    };
  },
});
</script>

<style></style>
