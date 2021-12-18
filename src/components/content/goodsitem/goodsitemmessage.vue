<template>
    <div class="goodsitemmessage">
        <div class="title">{{message1.title}}</div>
        <price>{{message1.price}}</price>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    props:{
        message1:{

        }
    }
}
</script>
<style scoped>
.title{
    font-size: 24px;
    font-weight: 500;
    font-family:cursive;
    color: rgb(58, 57, 57);
    
}
</style>