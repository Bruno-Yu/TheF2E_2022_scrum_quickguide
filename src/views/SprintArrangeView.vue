<template>
  <div class="px-[72px]">
    <div class="flex items-start mt-6 justify-center mb-8">
      <div class="mr-[42px] w-[180px] shrink-0">
        <img
          class="block h-auto"
          src="@/assets/images/開發工程師RD_sm.png"
          alt="開發工程師RD_sm"
        />
        <p class="text-center">開發團隊</p>
      </div>
      <div>
        <div class="bg-yellow/30 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              那你來試試看，在這經典的 Scrum
              流程圖中，這些流程分別代表哪一個會議呢？
            </p>
          </div>
        </div>
        <div class="bg-yellow/30 mt-2 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              請你試著把左下方三個方塊，拖拉至正確的位置上。
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
        @click="$router.push({ path: '/sprint-intro' })"
      >
        <p class="relative z-10">&lt;</p>
      </button>
      <button
        type="button"
        class="btn-base"
        @click="$router.push({ path: '/sprint-retro' })"
      >
        <p class="relative z-10">完成了~</p>
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
          差一點！<br />再思考一下流程，你可以的！
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
          你已經了解短衝的流程，<br />
          接下來再繼續挑戰吧！
        </p>
        <button
          type="button"
          class="btn-base w-[250px]"
          @click="$router.push({ path: '/product' })"
        >
          <p class="relative z-20">前往下個挑戰</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useStore } from "@/stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["show", "currentPage"]) },
  mounted() {
    this.show = true;
    this.currentPage = 8;
  },
};
</script>
