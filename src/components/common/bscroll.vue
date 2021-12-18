<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      elscroll: {},
    };
  },

  mounted() {
    this.elscroll = new BetterScroll(".wrapper", {
      probeType: 2,
      pullUpLoad: true,
      observeDOM: true,
      mouseWheel: true,
      click: true,
    });
    this.elscroll.on("pullingUp", () => {
      this.$emit("loadmore");
    });
    this.elscroll.on("scroll", () => {
      this.$emit("scroll");
    });
  },
  methods: {
    back() {
      this.scroll.scrollTo(0, 0);
    },
    pullload() {},
  },
};
</script>