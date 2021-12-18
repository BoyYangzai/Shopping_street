<template>
    <div class="shopcar">
    <Bscroll>
        <div>
            <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
    <Shopcard></Shopcard>
        </div>
    </Bscroll>
    <Submit></Submit>
    </div>
</template>
<script>
import Bscroll from '../../components/common/bscroll.vue';
import Shopcard from '../../components/common/shopcar/shopcard.vue';
import Submit from '../../components/common/shopcar/submit.vue';

export default {
  components: { Shopcard, Submit, Bscroll },
    setup() {
        
    },
}
</script>
<style scoped>
.shopcar{
    position: relative;
}

</style>