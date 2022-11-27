import { defineStore } from "pinia";

export const useStore = defineStore("useStore", {
  state: () => ({
    currentPage: 1,
    totalPage: 10,
    show: true,
    loading: false,
    showTime: null,
  }),
  getters: {
    currentPercent(state) {
      return ((state.currentPage - 1) / (state.totalPage - 1)) * 100 + "%";
    },
  },
  actions: {
    executeShow() {
      this.showTime = setTimeout(() => {
        this.show = false;
      }, 1500);
    },
    clearShow() {
      clearTimeout(this.showTime);
    },
  },
});
