<template>
  <div class="px-[72px]">
    <div class="flex items-start mt-6 justify-center mb-8">
      <div class="mr-[42px] w-[180px] shrink-0">
        <img
          class="block h-auto"
          src="@/assets/images/開發工程師RD_sm.png"
          alt="開發工程師RD_sm"
        />
      </div>
      <div>
        <div class="bg-yellow/30 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              哇新來的，你真的很幸運，今天剛好是開發 B 組的
              Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～
              我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄在
              Confluence 中。
            </p>
          </div>
        </div>
        <div class="bg-yellow/30 mt-2 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              重點在於『正面表述』，你也思考看看，哪一些是適合 Retro
              的回饋吧～～
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="absolute right-[80px] bottom-[80px] flex">
      <button
        type="button"
        class="btn-base mr-6"
        @click="$router.push({ path: '/sprint-arrange' })"
      >
        <p class="relative z-10">&lt;</p>
      </button>
      <button
        type="button"
        class="btn-base"
        @click="$router.push({ path: '/final' })"
      >
        <p class="relative z-10">我想我瞭解了!</p>
      </button>
    </div>
    <!-- fail -->
    <div
      class="hidden absolute bg-bg0/80 inset-0 flex justify-center items-center z-10"
    >
      <div class="flex flex-col items-center">
        <img
          class="block w-[350px]"
          src="@/assets/images/RD_head_lookright.png"
          alt="RD_head_lookright"
        />
        <p class="text-h3 text-center my-8">
          差一點！<br />
          請你再思考看看，哪一些是符合『正面表述』的回饋？
        </p>
        <button
          type="button"
          class="btn-base w-[180px]"
          @click="$router.push({ path: '/product' })"
        >
          <p class="relative z-20">再試試看</p>
        </button>
      </div>
    </div>
    <!-- success -->
    <div
      class="hidden absolute bg-bg0/80 inset-0 flex justify-center items-center z-10"
    >
      <div class="flex flex-col items-center">
        <img
          class="block w-[350px]"
          src="@/assets/images/RD_head_lookright.png"
          alt="RD_head_lookright"
        />
        <p class="text-h3 my-8 text-center">
          你做得非常好！<br />
          你已經了解如何給予『正面表述』的回饋！
        </p>
        <button
          type="button"
          class="btn-base w-[250px]"
          @click="$router.push({ path: '/product' })"
        >
          <p class="relative z-20">完成挑戰</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useStore } from "@/stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["currentPage", "show"]) },
  mounted() {
    this.show = true;
    this.currentPage = 9;
  },
};
</script>
