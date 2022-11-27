<template>
  <div class="relative h-main">
    <div
      class="bg-repeat-x bg-[url(@/assets/images/table.png)] w-full h-[384px] mt-8"
    ></div>
    <div class="absolute inset-0 bg-bg0/60 flex flex-col">
      <main>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
        <div class="firework"></div>
      </main>

      <div class="px-[72px] pt-[24px]">
        <button
          type="button"
          class="btn-base mb-[40px]"
          @click="$router.push({ path: '/' })"
        >
          <p class="relative z-10">重新挑戰</p>
        </button>
        <div class="flex flex-col items-center mb-4">
          <img class="mb-8" src="@/assets/images/Congrats.png" alt="Congrats" />
          <p class="text-h1 text-center mb-4">恭喜通過 Scrum 新手村！</p>
          <p class="text-h2 text-center">正式加入 TT 資訊 開發 A 組！</p>
        </div>
        <div class="flex justify-between px-[200px]">
          <div class="flex justify-end">
            <img
              class="mr-[55px] object-cover mt-[40px]"
              src="@/assets/images/PO_sm.png"
              alt="PO_sm"
            />
            <img
              class="mb-[40px]"
              src="@/assets/images/Titan_sm.png"
              alt="PO_sm"
            />
          </div>
          <div class="flex justify-end">
            <img
              class="mr-[55px] object-cover mb-[40px]"
              src="@/assets/images/SM_sm.png"
              alt="SM_sm"
            />
            <img
              class="mt-[40px]"
              src="@/assets/images/RD_sm.png"
              alt="RD_sm"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Vue3Lottie } from 'vue3-lottie';
import { mapWritableState } from "pinia";
import { useStore } from "@/stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["show", "currentPage"]) },
  mounted() {
    this.show = true;
    this.currentPage = 10;
  },
};
</script>

<style lang="scss" scoped>
@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));
  @return $randomNum;
}
$colors: #b967ff, #01cdfe, #05ffa1;
$numOfFireworks: 50;
@mixin create-path() {
  offset-path: path(
    "M 0, 0" +
      "q 0, #{randomNum(0, -50)}, #{randomNum(-300, 300)}, #{randomNum(-300, 300)} "
  );
}

main {
  position: absolute;
  height: 10px;
  width: 10px;
  animation: 5s position ease-out infinite;
}
.firework {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  offset-distance: 0;
  z-index: -1;
  @for $i from 0 through $numOfFireworks {
    &:nth-of-type(#{$i}) {
      @include create-path();
      animation: 1s scatter ease-out infinite;
      background: lighten(nth($colors, random(length($colors))), 20%);
    }
  }
}
@keyframes scatter {
  0% {
    offset-distance: 0%;
  }
  50% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}
@keyframes position {
  0%,
  19.9% {
    transform: translate(10vw, 40vh);
  }
  20%,
  39.9% {
    transform: translate(40vw, 30vh);
  }
  40%,
  59.9% {
    transform: translate(20vw, 90vh);
  }
  60%,
  79.9% {
    transform: translate(30vw, 20vh);
  }
  80%,
  99.9% {
    transform: translate(80vw, 50vh);
  }
}
</style>
