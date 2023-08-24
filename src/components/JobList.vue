<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>Temp</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import Job from "@/types/Job";
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  props: {
    // jobs: {
    //   required: true,
    //   type: Array as PropType<Job[]>,
    // },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const jobs = ref<Job[]>([
      {
        title: "farm worker",
        location: "lon lon ranch",
        salary: 30000,
        id: "1",
      },
      {
        title: "quarryman",
        location: "death mountain",
        salary: 40000,
        id: "2",
      },
      {
        title: "flute player",
        location: "the lost woods",
        salary: 35000,
        id: "3",
      },
      { title: "fisherman", location: "lake hylia", salary: 21000, id: "4" },
      {
        title: "prison guard",
        location: "gerudo valley",
        salary: 32000,
        id: "5",
      },
    ]);
    const orderedJobs = computed(() => {
      return [...jobs.value].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    return {
      orderedJobs,
    };
  },
});
</script>
<style scoped>
.list-move {
  transition: all 1s;
}
</style>
