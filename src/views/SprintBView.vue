<template>
  <div class="px-[72px]">
    <!-- 拖曳功能 -->
    <div class="grid grid-cols-2 gap-5 mt-8 mx-auto">
      <div class="p-4 bg-bg10">
        <div class="flex items-center mb-2">
          <h3 class="text-h3 pr-4">產品待辦清單</h3>
          <h4 class="text-h4">Product Backlog</h4>
        </div>
        <Container
          class="flex flex-col w-full h-[500px]"
          drag-class="item-ghost"
          :drop-placeholder="dropPlaceHolderValue"
          :get-child-payload="getChildPayloadOrigin"
          group-name="product-backlog"
          @drop="onDropFrom('originList', $event)"
        >
          <Draggable v-for="(item, index) in originList" :key="index">
            <div
              class="cursor-grab border-8 border-yellow py-4 px-8 mb-5 active:cursor-grabbing"
            >
              <p class="text-h4">{{ item.title }}</p>
              <p class="text-h5">{{ item.content }}</p>
              <ul class="flex flex-nowrap h-5 gap-1 list-none w-1/2 items-end">
                <li class="points w-full h-5 text-yellow whitespace-nowrap">
                  {{ item.points }} 點
                </li>
                <li
                  v-for="i in 20"
                  :key="i"
                  class="bg-bgn0 w-full h-3"
                  :class="{ scores: item.points >= i }"
                ></li>
              </ul>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="p-4 bg-bg10 relative">
        <div v-if="overWarning" class="absolute bg-bg0/70 inset-0 z-20">
          <p
            class="absolute left-1/2 -translate-x-1/2 top-20 text-h2 text-yellow"
          >
            超過點數了！
          </p>
        </div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-h3 pr-4">開發 A 組的短衝待辦清單</h3>
          <p class="text-yellow">20 點 / 5 人</p>
        </div>
        <ul class="flex flex-nowrap h-5 gap-1 list-none w-full mb-5">
          <li
            v-for="i in 20"
            :key="i"
            class="bg-bg20 w-full h-5"
            :class="{ active: activated >= i }"
          ></li>
        </ul>
        <Container
          class="flex flex-col w-full h-[500px]"
          drag-class="item-ghost"
          :drop-placeholder="dropPlaceHolderValue"
          :get-child-payload="getChildPayloadNew"
          group-name="product-backlog"
          @drag-start="onDragStart($event)"
          @drop="onDropTo('newList', $event)"
        >
          <Draggable v-for="(item, index) in newList" :key="index">
            <div
              class="cursor-grab border-8 border-yellow py-4 px-8 mb-5 active:cursor-grabbing"
            >
              <p class="text-h4">{{ item.title }}</p>
              <p class="text-h5">{{ item.content }}</p>
              <ul class="flex flex-nowrap h-5 gap-1 list-none w-1/2 items-end">
                <li class="points w-full h-5 text-yellow whitespace-nowrap">
                  {{ item.points }} 點
                </li>
                <li
                  v-for="i in 20"
                  :key="i"
                  class="bg-bgn0 w-full h-3"
                  :class="{ scores: item.points >= i }"
                ></li>
              </ul>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>
    <!-- button -->
    <div class="absolute right-[80px] bottom-[80px] flex">
      <button
        type="button"
        class="btn-base mr-6"
        @click="$router.push({ path: '/sprint-backlog' })"
      >
        <p class="relative z-10">&lt;</p>
      </button>
      <button
        type="button"
        class="btn-base"
        @click="$router.push({ path: '/sprint-arrange' })"
      >
        <p class="relative z-10">準備好了! 開始 Sprint</p>
      </button>
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
      overWarning: false,
      activated: 0,
      dropPlaceHolderValue: {
        className: "dropPlaceHolder",
        animationDuration: "100",
        showOnTop: false,
        timer: null,
      },
      originList: [
        {
          id: 2,
          title: "前台職缺列表",
          content: "職缺詳細內容、點選可發送應徵意願",
          points: 5,
        },
        {
          id: 3,
          title: "應徵者的線上履歷編輯器",
          content: "",
          points: 13,
        },
        {
          id: 4,
          title: "會員系統",
          content: "登入、註冊、權限管理",
          points: 8,
        },
        {
          id: 1,
          title: "後台職缺管理功能",
          content: "資訊上架、下架、顯示應徵者資料",
          points: 8,
        },
      ],
      newList: [],
    };
  },
  watch: {
    newList: {
      handler(n) {
        if (n.length) {
          let sum = 0;
          n.forEach((item) => (sum += item.points));
          if (sum <= 20) {
            this.activated = sum;
          }
        } else {
          this.activated = 0;
        }
      },
      deep: true,
    },
  },
  methods: {
    onDropFrom(list, result) {
      this[list] = this.applyDrag(this[list], result);
    },
    onDropTo(list, result) {
      if (this.activated + result.payload.points < 20) {
        this[list] = this.applyDrag(this[list], result);
      } else {
        this.originList = this.applyDrag(this.originList, result);
      }
    },
    onDragStart({ payload }) {
      console.log(this.newList.indexOf(payload));
      console.log(payload); // 被拖曳的對象
      if (
        this.newList.indexOf(payload) === -1 &&
        payload.points + this.activated > 20
      ) {
        this.overWarning = true;
        this.startTimer();
        clearTimeout(this.timer.value);
      } else {
        this.overWarning = false;
      }
    },
    startTimer() {
      const that = this;
      this.timer = setTimeout(() => {
        that.overWarning = false;
      }, 1500);
    },
    getChildPayloadOrigin(index) {
      return this.originList[index];
    },
    getChildPayloadNew(index) {
      return this.newList[index];
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
  },
  mounted() {
    this.show = true;
    this.currentPage = 6;
  },
};
</script>

<style scoped>
.item-ghost {
  @apply duration-150 -rotate-[10deg] bg-yellow border-8 border-white text-bg0;
  box-shadow: 8px 8px 0px rgba(255, 255, 255, 0.32);
}
.scores {
  @apply bg-yellow;
}
.item-ghost .scores {
  @apply bg-bg0;
}
.item-ghost .points {
  @apply text-bg0;
}

.dropPlaceHolder {
  @apply border-white border-8 border-dashed bg-transparent;
}
.active {
  @apply bg-yellow;
}
</style>
