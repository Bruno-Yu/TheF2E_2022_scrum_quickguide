<template>
  <div class="relative h-main">
    <div
      class="bg-repeat-x bg-[url(@/assets/images/table.png)] w-full h-[384px] mt-8"
    ></div>
    <div class="absolute inset-0 bg-bg0/60 flex flex-col">
      <div
        class="absolute top-[40%] w-full h-1/2 -translate-y-1/2 flex justify-center items-start"
      >
        <img
          class="block mr-[100px] relative"
          src="@/assets/images/產品負責人PO.png"
          alt="產品負責人PO"
        />

        <div
          class="w-[825px] bg-bg0 py-12 px-16 ring-[16px] ring-white relative"
        >
          <div
            class="absolute w-8 h-8 -left-[75px] top-0 bg-bg0 ring-[16px] ring-white"
          >
            <div class="absolute inset-0 bg-pink/30"></div>
          </div>
          <div
            class="absolute w-4 h-4 -left-[135px] top-2 bg-bg0 ring-[16px] ring-white"
          >
            <div class="absolute inset-0 bg-pink/30"></div>
          </div>
          <div class="absolute inset-0 bg-pink/30"></div>
          <div class="relative index-10 flex flex-col justify-center">
            <p class="text-h4 mb-4">我是 TT 資訊，開發 A 組的 PO，粉紅豬。</p>
            <p class="text-h4 mb-4">PO 也就是產品負責人（Product Owner）。</p>
            <p class="text-h4 mb-4">
              產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
              Backlog）唷！
            </p>
            <p class="text-h4">
              剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
              既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
            </p>
          </div>
        </div>
      </div>
      <div class="absolute right-[80px] bottom-0 flex">
        <button
          type="button"
          class="btn-base mr-6"
          @click="$router.push({ path: '/roles' })"
        >
          <p class="relative z-10">&lt;</p>
        </button>
        <button
          type="button"
          class="btn-base"
          @click="$router.push({ path: '/product-backlog' })"
        >
          <p class="relative z-10">接受挑戰</p>
        </button>
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
    this.currentPage = 3;
  },
};
</script>
