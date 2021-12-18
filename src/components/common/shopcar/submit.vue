<template>
    <div>
        <van-submit-bar :price="99999" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked">全选</van-checkbox>
  <template #tip>
    快来买买买买买买买吧！！！ <span @click="onClickEditAddress"><img src="../../../../public/gouwudai.png" alt=""></span>
  </template>
</van-submit-bar>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.van-submit-bar{
    margin-bottom: 43px;
}
img{
    margin-bottom: -5px;
    width: 20px;    
}
</style>