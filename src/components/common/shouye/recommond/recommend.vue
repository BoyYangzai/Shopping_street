<template>
    <div>
<div class="recommend">
    
<div v-for="(item,index) in tuijianshujv" :key="index">
        <a :href="item.link">
    
    <img :src="item.image" alt="">
    <p>
            {{item.title}}
    </p>
        </a>

</div>
</div>

    </div>
</template>
<script>
export default {
   props:{
       tuijianshujv:[]
   }
}
</script>
<style scoped>
.recommend{
    text-align: center;
    width: 100%;
    height: 110px;
    display: flex;
    font-size: 14px;
}
.recommend a{
    color: rgba(121, 118, 116, 0.897);

}
.recommend div,.recommend  img{
    width: 90px;
    height: 90px;
    flex: 1;
}


</style>