<template>
  <div>
    <!-- button -->
    <div class="absolute right-[80px] bottom-[80px] flex">
      <button
        type="button"
        class="btn-base mr-6"
        @click="$router.push({ path: '/sprint-backlog' })"
      >
        <p class="relative z-10">&lt;</p>
      </button>
      <button
        type="button"
        class="btn-base"
        @click="$router.push({ path: '/sprint-arrange' })"
      >
        <p class="relative z-10">準備好了! 開始 Sprint</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useStore } from "@/stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["show", "currentPage"]) },
  data() {
    return {
      activated: 0,
    };
  },
  mounted() {
    this.show = true;
    this.currentPage = 6;
  },
};
</script>
