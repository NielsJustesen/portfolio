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
        :images="content.images"
        :fullContent="content"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderTemplate from "./components/HeaderTemplate.vue";
import ContentTemplate from "./components/ContentTemplate.vue";
import Content from "./types/Content";
import Image from "./types/Image";
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
        images: [
          {
            url: "/images/Headshot.png",
            alt: "",
            class: "content-image fade-image",
          },
          {
            url: "/images/Niels_Justesen.jpg",
            alt: "",
            class: "content-image fade-image",
          },
          {
            url: "/images/SatireJohn.png",
            alt: "",
            class: "content-image fade-image",
          },
        ] as Image[],
      },
      {
        id: "about",
        headline: "About",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
        images: [
          { url: "/images/Headshot.png", alt: "", class: "content-image" },
          {
            url: "/images/Niels_Justesen.jpg",
            alt: "",
            class: "content-image",
          },
          { url: "/images/SatireJohn.png", alt: "", class: "content-image" },
        ] as Image[],
      },
      {
        id: "projects",
        headline: "Projects",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
        images: [
          { url: "/images/Headshot.png", alt: "", class: "content-image" },
          {
            url: "/images/Niels_Justesen.jpg",
            alt: "",
            class: "content-image",
          },
          { url: "/images/SatireJohn.png", alt: "", class: "content-image" },
        ] as Image[],
      },
      {
        id: "skills",
        headline: "Skills",
        content:
          "Here is a list of the skills I use in my daily life as a Web Developer",
        class: pagePanLeft.value,
        images: [
          { url: "/images/Headshot.png", alt: "", class: "content-image" },
          {
            url: "/images/Niels_Justesen.jpg",
            alt: "",
            class: "content-image",
          },
          { url: "/images/SatireJohn.png", alt: "", class: "content-image" },
        ] as Image[],
      },
      {
        id: "socials",
        headline: "Socials",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
        images: [
          { url: "/images/Headshot.png", alt: "", class: "content-image" },
          {
            url: "/images/Niels_Justesen.jpg",
            alt: "",
            class: "content-image",
          },
          { url: "/images/SatireJohn.png", alt: "", class: "content-image" },
        ] as Image[],
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
