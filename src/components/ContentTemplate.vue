<template>
  <div class="content-container" :id="id">
    <h2 class="content-headline">{{ headline }}</h2>
    <div class="content">
      <div class="content-info">
        <div class="content-content">
          <p :class="showContent">{{ content }}</p>
          <div :class="showContent">
            <div>
              <p>Click one to learn more about my experience</p>

              <table v-if="id == 'skills'" class="skill-table">
                <tr>
                  <td @click="clickSkill('HTML5')">HTML5</td>
                  <td @click="clickSkill('CSS3')">CSS3/Sass</td>
                  <td @click="clickSkill('TypeScript')">TypeScript</td>
                  <td @click="clickSkill('Vue')">Vue js</td>
                </tr>
                <tr>
                  <td @click="clickSkill('Php')">Php</td>
                  <td @click="clickSkill('API')">RESTful API</td>
                  <td @click="clickSkill('SQL')">SQL DBs</td>
                  <td @click="clickSkill('DBDesign')">Database Design</td>
                </tr>
                <tr>
                  <td @click="clickSkill('Unit')">Unit Testing</td>
                  <td @click="clickSkill('E2E')">E2E Testing</td>
                  <td @click="clickSkill('SCRUM')">SCRUM</td>
                  <td @click="clickSkill('Git')">Git</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="
          imagesList.length > 0 &&
          fullContent.class === 'show-content-container'
        "
        class="content-images"
      >
        <img
          v-for="image in imagesList"
          :key="image.url"
          :src="image.url"
          :alt="image.url"
          :class="image.class"
        />
      </div>
    </div>
    <div class="navigation">
      <button
        :disabled="fullContent.class !== 'show-content-container'"
        class="left-btn"
        @click="changePage('left')"
      >
        &lt;
      </button>
      <button
        :disabled="fullContent.class !== 'show-content-container'"
        class="right-btn"
        @click="changePage('right')"
      >
        >
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import Image from "@/types/Image";
import Content from "@/types/Content";
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
      required: true,
      type: Array as PropType<Image[]>,
    },
    fullContent: {
      required: true,
      type: Object as PropType<Content>,
    },
    links: {
      required: false,
      type: Array,
    },
  },
  setup(props, { emit }) {
    const imageIndex = ref<number>(0);
    const fadeImage = ref<string>("content-image fade-image");
    const showImage = ref<string>("content-image show-image");
    const imagesList = ref<Image[]>(props.images);
    const changePage = (dirr: string) => {
      emit("changePage", dirr);
    };
    const changePicture = () => {
      if (props.images === undefined) return;
      if (imageIndex.value >= props.images.length - 1) {
        imageIndex.value = 0;
      } else {
        imageIndex.value++;
      }
      imagesList.value.forEach((img) => {
        img.class = fadeImage.value;
      });
      imagesList.value[imageIndex.value].class = showImage.value;
    };

    const showContent = computed(() => {
      if (props.fullContent.class === "show-content-container") {
        return "content-show";
      } else {
        return "content-hide";
      }
    });

    setInterval(() => {
      changePicture();
    }, 3000);
    imagesList.value[0].class = showImage.value;

    const clickSkill = (skill: string) => {
      skill = skill.toLowerCase();
      emit("showSkill", skill);
    };
    return {
      showContent,
      imagesList,
      imageIndex,
      changePage,
      showImage,
      fadeImage,
      clickSkill,
    };
  },
});
</script>
