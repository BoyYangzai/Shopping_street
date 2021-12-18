<template>
  <div class="shouye">
    <Nav>
      <template #l class="l">
        <div class="l"></div>
      </template>
      <template #mm>
        <div>购物街</div>
      </template>
      <template #r>
        <div class="r"></div>
      </template>
    </Nav>
    <Swiper :lunboshujv="lunbotudata" class="swiper"></Swiper>
    <Recommend :tuijianshujv="recommenddata" class="recommend"></Recommend>
    <div class="popular">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="../../assets/images/recommend/recommend.jpg" alt=""
      /></a>
    </div>
    <Normalnav
      :title="['流行', '新款', '精选']"
      @change="changegoods"
    ></Normalnav>
    <Bscroll ref="scroll" @loadmore="pullmoredata" @scroll="scroll">
      <Goods
        :goods="activegoods"
        @refresh="refresh"
        :item="activegoods"
      ></Goods>
    </Bscroll>
    <Back @click.native="back" v-show="isshow"></Back>
  </div>
</template>
<script>
import Back from "../../components/common/back.vue";
import Bscroll from "../../components/common/bscroll.vue";
import Normalnav from "../../components/common/normalnav.vue";
import Nav from "../../components/common/shouye/navbar/nav.vue";
import Recommend from "../../components/common/shouye/recommond/recommend.vue";
import Swiper from "../../components/common/shouye/swiper/swiper.vue";
import Goods from "../../components/content/goods.vue";

import { getshujv, getgoods } from "../../network/shouye/shouye";

export default {
  components: { Nav, Swiper, Recommend, Normalnav, Goods, Bscroll, Back },
  data() {
    return {
      lunbotudata: [],
      recommenddata: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentdata: "pop",
      isshow: false,
    };
  },
  computed: {
    activegoods() {
      return this.goods[this.currentdata].list;
    },
  },
  setup() {},
  created() {
    this.getshouye();
    this.getgoodsdata("pop");
    this.getgoodsdata("new");
    this.getgoodsdata("sell");
  },
  methods: {
    changegoods(index) {
      switch (index) {
        case 0:
          this.currentdata = "pop";
          break;
        case 1:
          this.currentdata = "new";
          break;
        case 2:
          this.currentdata = "sell";
          break;
      }
    },
    gettotalgoods() {
      this.getgoodsdata("pop");
      this.getgoodsdata("new");
      this.getgoodsdata("sell");
    },
    pullmoredata() {
      this.getgoodsdata(this.currentdata);
    },
    getgoodsdata(currentdata) {
      console.log(this.goods[currentdata].page);
      const page = this.goods[currentdata].page + 1;
      getgoods(currentdata, page).then((res) => {
        this.goods[currentdata].list.push(...res.data.data.list);
        this.goods[currentdata].page += 1;
        console.log(this.goods[currentdata].page);
        this.$refs.scroll.elscroll.finishPullUp();
        console.log(this.$refs.scroll);
      });
    },
    getshouye() {
      getshujv().then((res) => {
        this.lunbotudata = res.data.data.banner.list;
        this.recommenddata = res.data.data.recommend.list;
      });
    },
    back() {
      this.$refs.scroll.elscroll.scrollTo(0, 0, 500);
    },

    refresh() {
      this.$refs.scroll.elscroll.refresh();
    },
    scroll() {
      if (-this.$refs.scroll.elscroll.y > 300) {
        this.isshow = true;
      } else {
        this.isshow = !true;
      }
    },
  },
};
</script>
<style scoped>
.shouye {
  position: relative;
}
.nav {
  z-index: 9999;
  position: fixed;

  top: 0;
  left: 0;
}
.swiper {
  margin-top: 67px;
}
.recommend {
  box-sizing: content-box;
  padding-top: 15px;
  padding-bottom: 10px;
  box-shadow: 0 8px 1px 1px rgba(0, 0, 0, 0.1);
}
.popular,
.popular img {
  width: 100%;
}
.popular {
  margin-top: 10px;
}
.normalnav {
  z-index: 999;
  background-color: rgba(245, 240, 240, 0.922);
  position: sticky;
  top: 67px;
}
.wrapper {
  margin-bottom: 49px;
  width: 100%;
  height: calc(100vh - 49px - 68px);
  overflow: hidden;
}
</style>