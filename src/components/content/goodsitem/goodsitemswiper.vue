<template>
    <div>
     <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="2500" indicator-color="white">
  <van-swipe-item v-for="(item,index) in lunboshujv" :key="index">
     <a :href="item.link">
          <img :src="item" alt="">
     </a>
      </van-swipe-item>

</van-swipe>
     </div>
    </div>
</template>
<script>
export default {
    props:{
        lunboshujv:[]
    }

}
</script>
<style scoped>
.my-swipe{
    margin-top: 2px;
    height: 270px;

}
.my-swipe .van-swipe-item img{
    width: 100%;
}
  .my-swipe .van-swipe-item {
      height: 195px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>    