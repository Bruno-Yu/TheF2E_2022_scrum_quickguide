<template>
  <div class="px-[72px]">
    <!-- upper part -->
    <div class="flex items-start mt-6 justify-center">
      <img
        class="block mr-[50px]"
        src="@/assets/images/產品負責人PO_sm.png"
        alt="產品負責人PO_sm"
      />
      <div class="bg-pink/30 py-4 pl-8 pr-[100px] flex items-start grow-1">
        <div>
          <p class="text-h4 mb-4">
            請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
          </p>
          <p class="text-h4">我們公司也推薦使用 Jira 來做任務的管理呢！</p>
        </div>
        <img
          class="ml-8"
          src="@/assets/images/white-jira.png"
          alt="white-jira"
        />
      </div>
    </div>
    <!-- 拖曳功能 -->
    <div class="flex bg-bg10 mt-3">
      <div class="p-4 w-1/2">
        <div class="flex items-center mb-2">
          <h3 class="text-h3 pr-4">產品待辦清單</h3>
          <h4 class="text-h4">Product Backlog</h4>
        </div>
        <Container
          class="flex flex-col w-full h-[450px]"
          drag-class="item-ghost"
          :drop-placeholder="dropPlaceHolderValue"
          :get-child-payload="getChildPayloadOrigin"
          group-name="product-backlog"
          @drop="onDrop('originList', $event)"
        >
          <Draggable v-for="(item, index) in originList" :key="index">
            <div
              class="cursor-grab border-8 border-pink py-4 px-8 text-center mb-5 active:cursor-grabbing"
            >
              <p class="text-h4">{{ item.title }}</p>
              <p class="text-h5">{{ item.content }}</p>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="grow-0 bg-gray-600 flex flex-col justify-between py-8">
        <p class="-rotate-90 whitespace-nowrap">優先度高</p>
        <p class="-rotate-90 whitespace-nowrap">優先度低</p>
      </div>
      <div class="p-4 w-1/2">
        <Container
          class="flex flex-col w-full h-[450px]"
          drag-class="item-ghost"
          :drop-placeholder="dropPlaceHolderValue"
          :get-child-payload="getChildPayloadNew"
          group-name="product-backlog"
          @drop="onDrop('newList', $event)"
        >
          <Draggable v-for="(item, index) in newList" :key="index">
            <div
              class="cursor-grab border-8 border-pink py-4 px-8 text-center mb-5 active:cursor-grabbing"
            >
              <p class="text-h4">{{ item.title }}</p>
              <p class="text-h5">{{ item.content }}</p>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>
    <!-- buttons -->
    <div class="absolute right-[80px] bottom-[80px] flex">
      <button
        type="button"
        class="btn-base mr-6"
        @click="$router.push({ path: '/' })"
      >
        <p class="relative z-10">&lt;</p>
      </button>
      <button type="button" class="btn-base" @click="checkResult">
        <p class="relative z-10">我完成了</p>
      </button>
    </div>
  </div>
  <!-- failure -->
  <div
    ref="failure"
    class="hidden absolute bg-bg0/80 inset-0 flex justify-center items-center z-10"
  >
    <div class="flex flex-col items-center">
      <img
        class="block w-[350px]"
        src="@/assets/images/PO_head_lookright.png"
        alt="PO_head_lookright"
      />
      <p class="text-h3 my-8">咦～你好像還沒完成唷！</p>
      <button
        type="button"
        class="btn-base w-[180px]"
        @click="$refs.failure.classList.add('hidden')"
      >
        <p class="relative z-20">返回挑戰</p>
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
        src="@/assets/images/PO_head_lookright.png"
        alt="PO_head_lookright"
      />
      <p class="text-h3 my-8 text-center">
        你做得非常好！<br />
        你已經能掌握基礎產品代辦清單的優先度排序<br />
        接下來再繼續挑戰吧！
      </p>
      <button
        type="button"
        class="btn-base w-[250px]"
        @click="$router.push({ path: '/sprint-intro' })"
      >
        <p class="relative z-20">前往下個挑戰</p>
      </button>
    </div>
  </div>
  <!-- adjustment -->
  <div
    ref="adjustment"
    class="hidden absolute bg-bg0/80 inset-0 flex justify-center items-center z-10"
  >
    <div class="flex flex-col items-center">
      <img
        class="block w-[350px]"
        src="@/assets/images/PO_head_lookright.png"
        alt="PO_head_lookright"
      />
      <p class="text-h3 my-8 text-center">順序可以再調整看看唷！</p>
      <button
        type="button"
        class="btn-base w-[180px]"
        @click="$refs.adjustment.classList.add('hidden')"
      >
        <p class="relative z-20">再試試看</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import { useStore } from "@/stores/useStore";
import { Container, Draggable } from "vue3-smooth-dnd";

export default {
  computed: { ...mapWritableState(useStore, ["currentPage", "show"]) },
  components: { Container, Draggable },
  data() {
    return {
      dropPlaceHolderValue: {
        className: "dropPlaceHolder",
        animationDuration: "100",
        showOnTop: false,
      },
      originList: [
        {
          id: 2,
          title: "前台職缺列表",
          content: "職缺詳細內容、點選可發送應徵意願",
        },
        {
          id: 3,
          title: "應徵者的線上履歷編輯器",
          content: "",
        },
        {
          id: 4,
          title: "會員系統",
          content: "登入、註冊、權限管理",
        },
        {
          id: 1,
          title: "後台職缺管理功能",
          content: "資訊上架、下架、顯示應徵者資料",
        },
      ],
      newList: [],
    };
  },
  methods: {
    onDrop(list, result) {
      this[list] = this.applyDrag(this[list], result);
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
    checkIdSequence(list) {
      const idArr = list.map((item) => item.id);
      console.log(idArr);
      const sortArr = [...idArr];
      sortArr.sort((a, b) => a - b);
      if (idArr.join("") === sortArr.join("")) {
        console.log(idArr.join(""), sortArr.join(""));
        return true;
      } else {
        return false;
      }
    },
    checkResult() {
      if (this.newList.length !== 4) {
        this.$refs.failure.classList.remove("hidden");
      } else if (this.checkIdSequence(this.newList)) {
        this.$refs.success.classList.remove("hidden");
      } else {
        this.$refs.adjustment.classList.remove("hidden");
      }
    },
  },
  mounted() {
    this.show = true;
    this.currentPage = 4;
  },
};
</script>

<style scoped>
.item-ghost {
  @apply duration-150 -rotate-[10deg] bg-pink border-8 border-white;
  box-shadow: 8px 8px 0px rgba(255, 255, 255, 0.32);
}
.dropPlaceHolder {
  @apply border-white border-8 border-dashed bg-transparent;
}
</style>
