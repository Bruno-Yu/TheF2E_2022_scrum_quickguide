<template>
  <div>
    <div class="flex justify-center items-center mt-[40px] mb-[50px]">
      <ul class="lines flex">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h2 class="text-h2 px-6">角色介紹</h2>
      <ul class="lines flex flex-row-reverse">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="px-[100px] pb-[48px]">
      <div class="grid grid-cols-3 gap-10">
        <div class="flex flex-col items-center">
          <img
            src="@/assets/images/PO_head_lookleft.png"
            alt="PO_head_lookleft"
          />
          <h3 class="text-h3 mt-8 mb-4">產品負責人</h3>
          <p class="text-h4 max-w-[350px]">
            產品方向及願景，定義產品細節，優先級別，交付時間。
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="@/assets/images/SM_head_lookleft.png"
            alt="SM_head_lookleft"
          />
          <h3 class="text-h3 mt-8 mb-4">敏捷教練</h3>
          <p class="text-h4 max-w-[350px]">
            負責團隊 scrum
            能合理運作，理解需求及安排產品技術製作時程，確保工程品質。
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="@/assets/images/RD_head_lookleft.png"
            alt="RD_head_lookleft"
          />
          <h3 class="text-h3 mt-8 mb-4">開發團隊</h3>
          <p class="text-h4 max-w-[350px]">
            負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center px-[70px]">
        <a
          class="block underline underline-offset-2 text-xl"
          href="https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-scrum-%E7%9A%84%E8%A7%92%E8%89%B2%E5%88%86%E5%B7%A5-d1d05818a954
"
          >推薦閱讀連結
        </a>
        <div class="flex">
          <button
            type="button"
            class="btn-base mr-6"
            @click="$router.push({ path: '/' })"
          >
            <p class="relative z-10">&lt;</p>
          </button>
          <button
            type="button"
            class="btn-base"
            @click="$router.push({ path: '/product' })"
          >
            <p class="relative z-10">我瞭解了！</p>
          </button>
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
  computed: {
    ...mapWritableState(useStore, ["show", "currentPage", "currentPercent"]),
  },
  mounted() {
    this.show = true;
    this.currentPage = 2;
    console.log(this.currentPercent);
  },
};
</script>

<style lang="scss" scoped>
.lines li {
  @apply w-[48px] h-[16px] bg-main;
  &:first-child {
    opacity: 0.05;
  }
  &:nth-child(2) {
    opacity: 0.1;
  }
  &:nth-child(3) {
    opacity: 0.2;
  }
  &:nth-child(4) {
    opacity: 0.3;
  }
  &:nth-child(5) {
    opacity: 0.4;
  }
  &:nth-child(6) {
    opacity: 0.5;
  }
  &:nth-child(7) {
    opacity: 0.6;
  }
  &:nth-child(8) {
    opacity: 0.7;
  }
  &:nth-child(9) {
    opacity: 0.8;
  }
  &:nth-child(10) {
    opacity: 0.9;
  }
  &:nth-child(11) {
    opacity: 1;
  }
}
</style>
