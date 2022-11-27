<template>
  <div class="absolute z-50 w-full h-screen flex flex-wrap" v-if="show">
    <div class="pixel zeroone"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zerofour"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel onezero"></div>
    <div class="pixel zeroeight"></div>
    <div class="pixel zeronine"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zeroseven"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zerothree"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zerotwo"></div>
    <div class="pixel zerosix"></div>
    <div class="pixel zerofive"></div>
    <div class="pixel zeroone"></div>
    <div class="pixel zerofour"></div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { useStore } from "@/stores/useStore";

export default {
  computed: { ...mapWritableState(useStore, ["show"]) },
  methods: {
    ...mapActions(useStore, ["executeShow"]),
  },
  watch: {
    show(n) {
      if (n) {
        this.executeShow();
      }
    },
  },
  mounted() {
    this.executeShow();
  },
};
</script>

<style lang="scss" scoped>
.pixel {
  height: 10%;
  width: 10%;
  // border: 1px solid white;
  animation-duration: 1s;
  animation-name: fadeOut;
  animation-fill-mode: both;
}
@keyframes fadeOut {
  from {
    background: black;
  }
  to {
    background: transparent;
  }
}
.zeroone {
  animation-delay: 0.1s;
}
.zerotwo {
  animation-delay: 0.2s;
}
.zerothree {
  animation-delay: 0.3s;
}
.zerofour {
  animation-delay: 0.4s;
}
.zerofive {
  animation-delay: 0.5s;
}
.zerosix {
  animation-delay: 0.6s;
}
.zeroseven {
  animation-delay: 0.7s;
}
.zeroeight {
  animation-delay: 0.8s;
}
.zeronine {
  animation-delay: 0.9s;
}
.onezero {
  animation-delay: 1s;
}
</style>
