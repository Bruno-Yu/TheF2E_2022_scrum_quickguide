<template>
  <div class="px-[72px]">
    <div class="flex items-start mt-6 justify-center mb-8 mx-auto">
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
    <div class="grid grid-cols-2 gap-5 mx-auto">
      <div class="flex flex-col">
        <h3 class="text-center text-h2 text-yellow mb-6">做得好的地方</h3>
        <ul class="list-none w-full">
          <li class="w-full" v-for="(item, index) in GoodArr" :key="index">
            <button
              type="button"
              class="w-full bg-bg10 p-6 text-h3 text-white flex items-center min-h-[152px]"
              :class="{ active: chosenGood === index ? true : false }"
              @click="selectGood(item, index)"
            >
              <div class="w-[40px] h-[40px] shrink-0 mr-4">
                <img
                  v-if="chosenGood !== index"
                  src="@/assets/images/Union.png"
                  alt="Union"
                />
                <img
                  v-else
                  src="@/assets/images/Active_union.png"
                  alt="Active_union"
                />
              </div>
              <p class="whitespace-wrap text-left">
                {{ item.content }}
              </p>
            </button>
          </li>
        </ul>
      </div>
      <div class="flex flex-col">
        <h3 class="text-center text-h2 text-yellow mb-6">
          有哪些可以做得更好？
        </h3>
        <ul class="list-none w-full">
          <li class="w-full" v-for="(item, index) in BetterArr" :key="index">
            <button
              type="button"
              class="w-full bg-bg10 p-6 text-h3 text-white flex items-center min-h-[152px]"
              :class="{ active: chosenBetter === index ? true : false }"
              @click="selectBetter(item, index)"
            >
              <div class="w-[40px] h-[40px] shrink-0 mr-4">
                <img
                  v-if="chosenBetter !== index"
                  src="@/assets/images/Union.png"
                  alt="Union"
                />
                <img
                  v-else
                  src="@/assets/images/Active_union.png"
                  alt="Active_union"
                />
              </div>
              <p class="whitespace-wrap text-left">
                {{ item.content }}
              </p>
            </button>
          </li>
        </ul>
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
      <button type="button" class="btn-base" @click="checkAws">
        <p class="relative z-10">我想我瞭解了!</p>
      </button>
    </div>
    <!-- fail -->
    <div
      ref="failure"
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
          @click="$refs.failure.classList.add('hidden')"
        >
          <p class="relative z-20">再試試看</p>
        </button>
      </div>
    </div>
    <!-- success -->
    <div
      ref="success"
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
          @click="$router.push({ path: '/final' })"
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
  data() {
    return {
      GoodAws: false,
      BetterAws: false,
      chosenGood: null,
      chosenBetter: null,
      GoodArr: [
        {
          content: "這次我幫了很多人救火耶。",
          result: false,
        },
        {
          content: "大家在開發上都會互相 cover，讓任務準時在時間內完成。",
          result: true,
        },
      ],
      BetterArr: [
        {
          content: "可以記錄這次的開發時間，讓預估團隊點數可以更精準。",
          result: true,
        },
        {
          content: "開發時間預估不準確，請後端下次改進，避免 delay 到我。",
          result: false,
        },
      ],
    };
  },
  methods: {
    selectGood(item, index) {
      this.GoodAws = item.result;
      this.chosenGood = index;
    },
    selectBetter(item, index) {
      this.BetterAws = item.result;
      this.chosenBetter = index;
    },
    checkAws() {
      if (this.BetterAws && this.GoodAws) {
        this.$refs.success.classList.remove("hidden");
      } else {
        this.$refs.failure.classList.remove("hidden");
      }
    },
  },
  mounted() {
    this.show = true;
    this.currentPage = 9;
  },
};
</script>

<style lang="scss" scoped>
.active {
  @apply text-yellow;
}
</style>
