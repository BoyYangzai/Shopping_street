<template>
    <div class="goods">
    <div
      class="goodsitem"
      v-for="(item, index) in goods"
      :key="index"
    >
      <Goositemdata :goods='goods' @refresh='refresh' :goodsitem="item" ref="goodsitem"></Goositemdata>
    </div>
    </div>
</template>
<script>
import Goositemdata from './goodsitem/goositemdata.vue';
export default {
  props:{
    goodsitem:{
      type:Object,
      dafault(){
        return{}
      }
    }
  },
  components: {Goositemdata  },
  setup() {},
  props: {
    goods: [],
  },
  methods:{
    refresh(){
      this.$emit('refresh')
    },
    
}
};
</script>
<style scoped>
.goods{
display: flex;
justify-content: space-around;
flex-wrap: wrap;
}
.goodsitem{
  width: 47%;
  padding: 5px;
}
</style>