<template>
  <div
    class="w-full relative bg-gray-700 h-12 after:absolute after:content-[''] after:h-1/3 after:w-full after:bg-black/40 after:left-0 after:bottom-0"
  >
    <div
      v-if="currentPercent !== '0%'"
      class="absolute h-full bg-main before:absolute before:content-[''] before:h-1/3 before:w-full before:bg-black/40 before:right-0 before:bottom-0 after:content-[''] after:bg-[url('@/assets/images/Rocket.png')] after:w-[76px] after:h-[49px] after:absolute after:left-full after:-translate-x-[41%] after:z-10"
      :style="{ width: currentPercent }"
    ></div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../stores/useStore";

export default {
  computed: {
    ...mapState(useStore, ["currentPercent"]),
  },
};
</script>
