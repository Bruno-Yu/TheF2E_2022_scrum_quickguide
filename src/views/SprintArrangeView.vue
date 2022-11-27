<template>
  <div class="px-[72px]">
    <div class="flex items-start mt-6 justify-center mb-8 mx-auto">
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
    <!-- 拖曳區 -->
    <div class="mx-auto bg-bg10 px-[66px] py-[50px] min-h-[370px] flex">
      <div class="flex flex-col items-center justify-between">
        <div class="relative text-h4 text-bg0 bg-yellow px-4 py-2">
          產品待辦清單
          <img
            class="absolute left-1/2 -translate-x-1/2 top-full h-[48px] w-[42px]"
            src="@/assets/images/Arrow_down.png"
            alt="Arrow_down"
          />
        </div>
        <div class="relative text-h4 text-bg0 bg-yellow px-4 py-2">
          短衝規劃
          <img
            class="absolute left-1/2 -translate-x-1/2 top-full h-[48px] w-[42px]"
            src="@/assets/images/Arrow_down.png"
            alt="Arrow_down"
          />
        </div>
        <div class="relative text-h4 text-bg0 bg-yellow px-4 py-2">
          短衝待辦清單
          <img
            class="absolute top-1/2 -translate-y-1/2 left-full h-[42px] w-[48px]"
            src="@/assets/images/Arrow_right.png"
            alt="Arrow_right"
          />
        </div>
      </div>
      <div class="flex items-end">
        <div
          class="relative ml-16 bg-contain bg-[url(@/assets/images/Sprint_flow_sprint.png)] w-[360px] h-[200px] text-h3 text-center py-[45px]"
        >
          <p class="pr-4">短衝</p>
          <p class="pr-4">Sprint</p>
          <div
            class="absolute bottom-[93%] left-[75%] bg-contain bg-[url(@/assets/images/Sprint_flow_daily.png)] w-[296px] h-[128px]"
          >
            <div
              class="absolute right-[11%] top-[7%] border-white/30 border-dashed border-8 w-[240px] h-[100px] mb-5 ml-20"
            >
              <!-- 拖曳區 -->
              <Container
                class="w-[250px] h-[120px]"
                drag-class="item-ghost"
                :drop-placeholder="dropPlaceHolderValue"
                :get-child-payload="getChildPayloadFirst"
                group-name="spring-arrange"
                @drop="onDrop('firstList', $event)"
              >
                <Draggable v-for="(item, index) in firstList" :key="index">
                  <div
                    class="cursor-grab border-8 border-yellow py-4 px-8 active:cursor-grabbing w-[240px] h-[100px]"
                  >
                    <p class="text-h4">{{ item.title }}</p>
                    <p class="text-h5">{{ item.content }}</p>
                  </div>
                </Draggable>
              </Container>
            </div>
          </div>
        </div>
        <div
          class="relative border-white/30 border-dashed border-8 w-[240px] h-[100px] mb-5 ml-5"
        >
          <!-- 拖曳區 -->
          <Container
            class="w-[240px] h-[100px]"
            drag-class="item-ghost"
            :drop-placeholder="dropPlaceHolderValue"
            :get-child-payload="getChildPayloadSecond"
            group-name="spring-arrange"
            @drop="onDrop('secondList', $event)"
          >
            <Draggable v-for="(item, index) in secondList" :key="index">
              <div
                class="cursor-grab border-8 border-yellow py-4 px-8 mb-5 active:cursor-grabbing"
              >
                <p class="text-h4">{{ item.title }}</p>
                <p class="text-h5">{{ item.content }}</p>
              </div>
            </Draggable>
          </Container>

          <img
            class="absolute top-1/2 -translate-y-1/2 left-[110%] h-[42px] w-[48px]"
            src="@/assets/images/Arrow_right.png"
            alt="Arrow_right"
          />
        </div>
        <div
          class="border-white/30 border-dashed border-8 w-[240px] h-[100px] mb-5 ml-20"
        >
          <!-- 拖曳區 -->
          <Container
            class="w-[240px] h-[100px]"
            drag-class="item-ghost"
            :drop-placeholder="dropPlaceHolderValue"
            :get-child-payload="getChildPayloadThird"
            group-name="spring-arrange"
            @drop="onDrop('thirdList', $event)"
          >
            <Draggable v-for="(item, index) in thirdList" :key="index">
              <div
                class="cursor-grab border-8 border-yellow py-4 px-8 mb-5 active:cursor-grabbing"
              >
                <p class="text-h4">{{ item.title }}</p>
                <p class="text-h5">{{ item.content }}</p>
              </div>
            </Draggable>
          </Container>
        </div>
      </div>
    </div>
    <!-- 拖曳按鈕 -->
    <div class="flex space-x-4 mt-5">
      <Container
        class="flex space-x-4"
        drag-class="item-ghost"
        :drop-placeholder="dropPlaceHolderValue"
        :get-child-payload="getChildPayloadOrigin"
        group-name="spring-arrange"
        @drop="onDrop('originList', $event)"
      >
        <Draggable v-for="(item, index) in originList" :key="index">
          <div
            class="cursor-grab border-8 border-yellow py-4 px-8 mb-5 active:cursor-grabbing"
          >
            <p class="text-h4">{{ item.title }}</p>
            <p class="text-h5">{{ item.content }}</p>
          </div>
        </Draggable>
      </Container>
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
      <button type="button" class="btn-base" @click="checkAws">
        <p class="relative z-10">完成了~</p>
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
          差一點！<br />再思考一下流程，你可以的！
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
          你已經了解短衝的流程，<br />
          接下來再繼續挑戰吧！
        </p>
        <button
          type="button"
          class="btn-base w-[250px]"
          @click="$router.push({ path: '/sprint-retro' })"
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
import { Container, Draggable } from "vue3-smooth-dnd";

export default {
  components: { Container, Draggable },
  computed: { ...mapWritableState(useStore, ["show", "currentPage"]) },
  data() {
    return {
      originList: [
        {
          id: 2,
          title: "短衝檢視會議",
          content: "Sprint Review",
        },
        { id: 3, title: "短衝自省會議", content: "Sprint Retrospective" },
        { id: 1, title: "每日站立會議", content: "Daily Scrum" },
      ],
      firstList: [],
      secondList: [],
      thirdList: [],
    };
  },
  methods: {
    onDrop(list, result) {
      this[list] = this.applyDrag(this[list], result);
    },
    getChildPayloadOrigin(index) {
      return this.originList[index];
    },
    getChildPayloadFirst(index) {
      return this.firstList[index];
    },
    getChildPayloadSecond(index) {
      return this.secondList[index];
    },
    getChildPayloadThird(index) {
      return this.thirdList[index];
    },

    applyDrag(arr, dragResult) {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return arr;
      const result = [...arr];
      let itemToAdd = payload;
      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      return result;
    },
    checkAws() {
      if (
        this.firstList[0].id === 1 &&
        this.secondList[0].id === 2 &&
        this.thirdList[0].id === 3
      ) {
        this.$refs.success.classList.remove("hidden");
      } else {
        this.$refs.failure.classList.remove("hidden");
      }
    },
  },

  mounted() {
    this.show = true;
    this.currentPage = 8;
  },
};
</script>

<style scoped>
.item-ghost {
  @apply duration-150 -rotate-[10deg] bg-yellow border-8 border-white text-bg0;
  box-shadow: 8px 8px 0px rgba(255, 255, 255, 0.32);
}
.dropPlaceHolder {
  @apply border-white border-8 border-dashed bg-transparent;
}
.active {
  @apply bg-yellow;
}
</style>
