<template>
  <div>
    <!-- bg -->
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
    <div class="relative w-full">
      <div class="flex justify-center items-center max-h-[160px]">
        <img src="@/assets/images/Sine02.png" alt="Sine02" />
        <img src="@/assets/images/welcome.png" alt="welcome" />
        <img src="@/assets/images/Shine01.png" alt="Shine01" />
      </div>
      <div class="flex flex-col items-center relative">
        <img
          class="max-w-[330px]"
          src="@/assets/images/Character.png"
          alt="Character"
        />
        <div
          class="absolute left-1/2 bottom-0 w-[1296px] -translate-x-1/2 bg-bg0 py-12 px-16 ring-[16px] ring-white/50"
        >
          <img
            class="absolute -top-[16px] -right-[16px]"
            src="@/assets/images/shine.png"
            alt="shine"
          />
          <img
            class="absolute -bottom-[16px] -left-[16px] rotate-180"
            src="@/assets/images/shine.png"
            alt="shine"
          />

          <div class="absolute inset-0 bg-bgMain"></div>
          <div
            class="relative index-10 min-h-[156px] flex flex-col justify-center"
          >
            <div class="w-full text-h3 text-center">
              <p class="line-1"></p>
              <p class="line-2"></p>
              <p class="line-3"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-7">
        <button
          type="button"
          class="btn-lg"
          @click="$router.push({ path: '/roles' })"
        >
          <p class="relative z-10">接受挑戰</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, TextPlugin } from "gsap/all";
import { mapWritableState } from "pinia";
import { useStore } from "../stores/useStore";

gsap.registerPlugin(gsap, TextPlugin);
export default {
  computed: {
    ...mapWritableState(useStore, ["currentPage", "show", "loading"]),
  },
  watch: {
    loading(n) {
      if (n) {
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      } else {
        this.show = true;
      }
      // clearTimeout(loadingTimer);
    },
  },
  methods: {
    setTyping() {
      const typingEffect = gsap.timeline({ delay: 3 });
      typingEffect.to(".line-1", {
        text: "哈囉，歡迎加入 TT 資訊！",
        duration: 1.5,
      });
      typingEffect.to(".line-2", {
        text: "在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！",
        duration: 4.5,
      });
      typingEffect.to(".line-3", {
        text: "請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧 ~",
        duration: 4.5,
      });
    },
  },
  mounted() {
    this.setTyping();
    this.show = false;
    this.loading = true;
    this.currentPage = 1;
  },
};
</script>

<style lang="scss" scoped>
$direction: -2000px;
@import "@/assets/style/bg_star.scss";
</style>
