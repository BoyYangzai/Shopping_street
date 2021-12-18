<template>
  <div id="app">
    <keep-alive exclude="goodsitem">
    <router-view/>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>

  
</template>
<script>
import Tabbar from './components/common/tabbar/tabbar.vue'


export default {
  components: { Tabbar },
  
 }
</script>
<style>
@import  './assets/css/normalize.css';
</style>
