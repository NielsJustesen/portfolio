<template>
  <div class="app">
    <HeaderTemplate />
    <div class="content-container-list" :class="containerClass">
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
        @showSkill="showSkill"
      />
    </div>
  </div>
  <div
    class="skill-container"
    :class="shouldShowSkill === true ? 'show-skill' : 'hide-skill'"
  >
    <SkillShowcase
      :skillToShow="skillToShow"
      @StopShowcase="showSkill('stop')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderTemplate from "./components/HeaderTemplate.vue";
import ContentTemplate from "./components/ContentTemplate.vue";
import Content from "./types/Content";
import Image from "./types/Image";
import SkillShowcase from "./components/SkillShowcase.vue";

export default defineComponent({
  name: "App",
  components: { HeaderTemplate, ContentTemplate, SkillShowcase },
  setup() {
    const pageShow = ref<string>("show-content-container");
    const skillToShow = ref<string>("");
    const shouldShowSkill = ref<boolean>(false);
    const pagePanLeft = ref<string>("pan-left-content-container");
    const pagePanRight = ref<string>("pan-right-content-container");
    const containerClass = ref<string>("");
    const contentList = ref<Content[]>([
      {
        id: "skills",
        headline: "Skills",
        content:
          "Here is a list of the skills I use in my daily life as a Web Developer.",
        class: pageShow.value,
        images: [
          {
            url: "/images/Logos/TypescriptLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/vuejsLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/html5Logo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/CSS3Logo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/JavaScriptLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/mysqlLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/ScrumLogo.jpg",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/PHPLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/restfulapiLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/GitLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/PostgreSqlLogo.png",
            alt: "",
            class: "content-image",
          },
          {
            url: "/images/Logos/sqliteLogo.png",
            alt: "",
            class: "content-image",
          },
        ] as Image[],
      },
      {
        id: "home",
        headline: "Home",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        class: pagePanLeft.value,
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
    const showSkill = (skill: string) => {
      console.log(skill);
      skillToShow.value = skill;
      shouldShowSkill.value = true;
      containerClass.value = "pan-up-content-container";
      if (skill === "stop") {
        containerClass.value = "pan-down-content-container";
        shouldShowSkill.value = false;
      }
    };
    return {
      pageView,
      skillToShow,
      shouldShowSkill,
      pageShow,
      pagePanLeft,
      pagePanRight,
      contentList,
      changePage,
      showSkill,
      containerClass,
    };
  },
});
</script>

<style></style>
