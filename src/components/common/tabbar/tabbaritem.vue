<template>
<div class='tab-bar-item' @click="change" >
    <slot name='imgs' v-if='!isactive'></slot>
    <slot name='active-imgs' v-else></slot>
    <div  :class='activecolor'>
    <slot name='text' ></slot>
    </div>
</div>
</template>
<script>
export default {

  props:{
    path:{String,
   },
    
  },
  computed:{
    isactive(){
      return this.$route.path===this.path
    },
    activecolor(){
      return {nowcolor:this.$route.path===this.path,nocolor:!(this.$route.path===this.path)}
    }
    
  },
    methods:{
      change(){
        this.$router.push(this.path)
      }
    }
}
</script>
<style scoped>
.tab-bar-item {
  margin-top: -2px;
  text-align: center;
  line-height: 100%;
  font-weight: 700;
  font-size: 15px;
  
}
.tab-bar-item{
  flex: 1;
text-align: center;
height: 49px;
}
.tab-bar-item .nowcolor{
  color: rgb(251, 173, 173);
}
#tab-bar img {
  width: 30px;
  height: 30px;
}
.nocolor{
  color: rgb(147, 147, 147);
}
</style>