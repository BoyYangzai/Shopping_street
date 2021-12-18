<template>
<div class="goodsitem" name='goodsitem'>
    <Goodsitemjnav :title="title">  </Goodsitemjnav>
  <Goodsitemswiper :lunboshujv="lunbotushujv"></Goodsitemswiper>
  <Goodsitemmessage :message1="message1"></Goodsitemmessage>
</div>
</template>
<script>
import Goodsitemjnav from '../../components/content/goodsitem/goodsitemjnav.vue';
import Goodsitemmessage from '../../components/content/goodsitem/goodsitemmessage.vue';
import Goodsitemswiper from '../../components/content/goodsitem/goodsitemswiper.vue';

import {getgoodsitemdata} from '../../network/goodsitem/goodsitem'
export default {
    name:'goodsitem',
  components: { Goodsitemjnav, Goodsitemswiper, Goodsitemmessage },
  data() {
    return {
      id: "",
      title:['商品','参数','评论','推荐'],
      goodsitemdata:{},
      lunbotushujv:[],
      message1:{}
    };
  },
  setup() {},
created() {
    this.id = this.$route.params.id;
        getgoodsitemdata(this.id).then((res)=>{
            this.goodsitemdata=res,
            this.lunbotushujv=res.data.result.itemInfo.topImages
            this.message1=res.data.result.itemInfo
            console.log(res.data.result.itemInfo.topImages);
            console.log(this.lunbotushujv);
            console.log(this.goodsitemdata);

})

  },


};
</script>
<style scoped>

.eachnav{
    width: 10px;
}
</style>