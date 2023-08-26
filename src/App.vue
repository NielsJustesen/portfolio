<template>
  <div class="app">
    <HeaderTemplate />
    <div class="content-container-list">
      <ContentTemplate
        v-for="content in contentList"
        :key="content.id"
        :id="content.id"
        :headline="content.headline"
        :content="content.content"
        :class="content.class"
        @changePage="changePage"
      />
    </div>
    <!-- <div class="navigation">
      <button @click="changePage('left')">&larr;</button>
      <button @click="changePage('right')">&rarr;</button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderTemplate from "./components/HeaderTemplate.vue";
import ContentTemplate from "./components/ContentTemplate.vue";
import Content from "./types/Content";
export default defineComponent({
  name: "App",
  components: { HeaderTemplate, ContentTemplate },
  setup() {
    const pageShow = ref<string>("show-content-container");
    const pagePanLeft = ref<string>("pan-left-content-container");
    const pagePanRight = ref<string>("pan-right-content-container");
    const contentList = ref<Content[]>([
      {
        id: "home",
        headline: "Home",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pageShow.value,
      },
      {
        id: "about",
        headline: "About",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
      },
      {
        id: "projects",
        headline: "Projects",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
      },
      {
        id: "socials",
        headline: "Socials",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
      },
    ]);
    const pageView = ref<number>(0);

    const changePage = (direction: string) => {
      if (direction === "right") {
        if (pageView.value !== contentList.value.length - 1) {
          panRight();
        }
      }
      if (direction === "left") {
        if (pageView.value !== 0) {
          panLeft();
        }
      }
    };
    const panRight = () => {
      pageView.value++;
      if (contentList.value[pageView.value] !== undefined) {
        contentList.value[pageView.value].class = pageShow.value;
      }
      if (contentList.value[pageView.value - 1] !== undefined) {
        contentList.value[pageView.value - 1].class = pagePanRight.value;
      }
    };
    const panLeft = () => {
      pageView.value--;
      if (contentList.value[pageView.value] !== undefined) {
        contentList.value[pageView.value].class = pageShow.value;
      }
      if (contentList.value[pageView.value + 1] !== undefined) {
        contentList.value[pageView.value + 1].class = pagePanLeft.value;
      }
    };
    return {
      pageView,
      pageShow,
      pagePanLeft,
      pagePanRight,
      contentList,
      changePage,
    };
  },
});
</script>

<style></style>
