<template>
  <div v-if="loading" class="absolute z-50 inset-0 bg-bg0">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <Vue3Lottie
      class="absolute inset-1/4"
      :animationData="rocketJSON"
      :height="320"
      :width="320"
    />
  </div>
</template>

<script>
import rocketLottie from "@/assets/rocket_lottie";
import { mapWritableState } from "pinia";
import { useStore } from "../stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["loading"]) },
  data() {
    return {
      rocketJSON: rocketLottie,
    };
  },
};
</script>
<style lang="scss" scoped>
$direction: 2000px;
@import "@/assets/style/bg_star.scss";
</style>
