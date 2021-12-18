<template>
  
     <div @click="itemclick">
          <img :src="goodsitem.show.img" alt="" @load="refresh"  />
      <div class="title">{{ goodsitem.title }}</div>
      <div class="price">
        <div class="duiqi">
          <span class="orgprice">{{ goodsitem.orgPrice }}</span
          ><img src="../../../assets/images/goods/shoucang.png" alt="" /><span
            class="cfav"
            >{{ goodsitem.cfav }}</span
          >
        </div>
  </div>
     </div>
</template>
<script>
export default {
  setup() {},
  props: {
    goods: [],
    goodsitem:{
    
}
},
  methods: {
    refresh() {
      this.$emit("refresh");
    },
    itemclick(){
        this.$router.push('/goodsitem/'+this.goodsitem.iid)
        console.log(this.goodsitem);
    },
   
  },
  
     
};
</script>
<style scoped>

img{
  width: 100%;
}
.title{
  margin-top: 4px;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
color:rgb(44, 43, 43);
}
.price .duiqi{
  text-align: center;
  width: 140px;
  margin: 0 auto;
}
.orgprice{
  color: rgb(238, 135, 151);
}
.price img{
  margin-left: 10px;
  width: 8%;
}
.price .cfav{
  font-size: 16px;
  font-weight: 500;
  color: rgb(128, 128, 128);
}
</style>