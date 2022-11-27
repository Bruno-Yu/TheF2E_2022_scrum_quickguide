<template>
  <!-- progress bar -->
  <div class="hidden 2xl:flex flex-col w-full h-screen">
    <LoadingPage />
    <PixelatedTransition />
    <ProgressBar />
    <router-view class="grow-1" />
    <Footer />
  </div>
  <div
    class="2xl:hidden bg-black w-full h-screen flex justify-center items-center"
  >
    <p class="text-2xl">請使用桌機版瀏覽以獲得更好的使用者體驗</p>
  </div>
</template>

<script>
import Footer from "./components/FooterModule.vue";
import ProgressBar from "./components/ProgressBar";
import PixelatedTransition from "@/components/PixelatedTransition.vue";
import LoadingPage from "./components/LoadingPage.vue";

export default {
  components: { Footer, ProgressBar, PixelatedTransition, LoadingPage },
};
</script>
