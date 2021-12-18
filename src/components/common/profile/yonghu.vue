<template>
<div>
  
  <van-button  @click="share" color="linear-gradient(to right, #3b86e8, #7232dd)">
邀请好朋友一起购物
</van-button>
 <van-share-sheet
  v-model="showShare"
  title="立即分享给好朋友吧！"
  :options="options"/>

</div>
</template>
<script>
export default {
  data() {
    return {
      showShare:false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },
  methods:{
      share(){
          this.showShare=!this.showShare
      }
  }
};
</script>
<style scoped>
.van-overlay{

}
</style>