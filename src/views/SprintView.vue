<template>
  <div class="px-[72px]">
    <div class="flex items-start mt-6 justify-center mb-8">
      <div class="mr-[42px] w-[180px] shrink-0">
        <img
          class="block h-auto"
          src="@/assets/images/產品負責人PO_sm.png"
          alt="產品負責人PO_sm"
        />
        <p class="text-center">產品負責人</p>
      </div>
      <div class="bg-pink/30 py-4 px-8 grow-0">
        <p class="text-h4">
          產品待辦清單好了之後，我們來召集 Scrum Master
          和開發團隊共同召開短衝規劃會議（Sprint
          Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
          Backlog），並由開發團隊在接下來的產品開發週期裡執行。
        </p>
      </div>
    </div>
    <div class="flex items-start justify-center mb-8">
      <div class="mr-[42px] w-[180px] shrink-0">
        <img
          class="block h-auto"
          src="@/assets/images/敏捷教練SM_sm.png"
          alt="敏捷教練SM_sm"
        />
        <p class="text-center">敏捷教練</p>
      </div>
      <div>
        <div class="bg-green/30 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              嗨嗨(ﾟ∀ﾟ)你是新來的前端吧！我是這次的 Scrum Master
              山豬，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
              Scrum 瞭解。這位是黃黃，是我們開發團隊的成員唷～
            </p>
          </div>
        </div>
        <div class="bg-green/30 mt-2 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              目前我們團隊一次 Sprint
              週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint
              Point) 大約是 20 點左右。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-center mb-8">
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
              嘿！新來的，你應該還不知道點數是什麼意思吧(ゝ∀･)
              我來跟你介紹一下吧～ Sprint Point
              目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
            </p>
          </div>
        </div>
        <div class="bg-yellow/30 mt-2 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！
              對了，我們平常管理任務是使用 Jira
              這套軟體，你有時間記得先去註冊和熟悉唷～
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
        @click="$router.push({ path: '/product-backlog' })"
      >
        <p class="relative z-10">&lt;</p>
      </button>
      <button
        type="button"
        class="btn-base"
        @click="$router.push({ path: '/sprint-backlog' })"
      >
        <p class="relative z-10">沒問題，我來挑戰!</p>
      </button>
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
    this.currentPage = 5;
  },
};
</script>
