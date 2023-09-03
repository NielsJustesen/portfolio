<template>
  <div class="content-container" :id="id">
    <div class="content">
      <div class="content-info">
        <h2>{{ headline }}</h2>
        <div class="content-content">
          <p :class="showContent">{{ content }}</p>
        </div>
      </div>
      <div v-if="imagesList.length > 0" class="content-images">
        <img
          v-for="image in imagesList"
          :key="image.url"
          :src="image.url"
          alt="missing_img"
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
        return "content-content-show";
      } else {
        return "content-content-hide";
      }
    });

    setInterval(() => {
      changePicture();
    }, 3000);
    imagesList.value[0].class = showImage.value;
    return {
      showContent,
      imagesList,
      imageIndex,
      changePage,
      showImage,
      fadeImage,
    };
  },
});
</script>
