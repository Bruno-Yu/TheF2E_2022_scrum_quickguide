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
              等等等等等，你應該還不知道什麼是 Sprint 吧？ 讓我先為你介紹一下～
              仔細聽好唷，等等會考考你！
            </p>
          </div>
        </div>
        <div class="bg-yellow/30 mt-2 py-4 px-8 flex items-start">
          <div>
            <p class="text-h4">
              Sprint
              是一個短衝，如同前面敏捷教練所提到的，一次sprint一次sprint週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議（Daily
              Scrum） ，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint
              的結束也會包含 短衝檢視會議（Sprint Review）、短衝自省會議（Sprint
              Retrospective）。
            </p>
          </div>
        </div>
      </div>
    </div>

        <div class="flex container mx-auto p-6 bg-bg10 ">
      <div class="w-1/3 py-3 cursor-pointer text-center" :class="{ 'active': activated === 0 }" @click="activated = 0">
        <p class="text-h3 mb-1">每日站立會議</p>
        <p>Daily Scrum</p>
      </div>
      <div class="w-1/3 p-3 cursor-pointer text-center" :class="{ 'active': activated === 1 }" @click="activated = 1">
        <p class="text-h3 mb-1">短衝檢視會議</p>
        <p>Sprint Review</p>
      </div>
      <div class="w-1/3 p-3 cursor-pointer text-center" :class="{ 'active': activated === 2 }" @click="activated = 2">
        <p class="text-h3 mb-1">短衝自省會議</p>
        <p>Sprint Retrospective</p>
      </div>
    </div>
    <div
  class="container mx-auto p-6 text-h3  "
>
      <p v-if="activated === 0">每天都要進行的會議，以 15 分鐘為限制<br/>
      <ul class="list-disc list-inside">
        <li>昨天為團隊的短衝目標（Sprint Goal）做了那些進度 </li>
        <li>今天我會如何準備來幫助團隊達到短衝目標 </li>
        <li>過程中有遇到什麼問題、難題</li>
      </ul>
        透過團隊分享，追蹤大家的工作狀況。</p>
      <p v-if="activated === 1">向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。<br/>
        在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。</p>
      <p v-if="activated === 2">團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方、可以改進的地方。<br/>
        如何維持我們已有的成功經驗，優化工作流程、讓團隊有變得更好的機會。<br/>
        推薦工具：<span><img src="@/assets/images/confluence.png" class="object-contain inline" /></span></p>
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
        <p class="relative z-10">我瞭解了</p>
      </button>
    </div>

  </div>
</template>


<script>
import { mapWritableState } from "pinia";
import { useStore } from "@/stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["show","currentPage"]) },
  data() {
    return {
      activated: 0
    }
  },
  mounted() {
    this.show = true;
    this.currentPage = 7;
  },
}
</script>

<style lang="scss" scoped>
.active{
  @apply text-bg0 bg-yellow;
}

</style>