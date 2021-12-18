
<template>
<div>
  <div id='tab-bar'>
   <tabbaritem path='/shouye' >
<template #imgs>
        <img src="../../../assets/images/tabbar/shouye-1.png" alt="" />
</template>
<template #active-imgs>
        <img src="../../../assets/images/tabbar/shouye-2.png" alt="" />
</template>
<template  #text>
        <div>首页</div>
</template>
</tabbaritem>

<tabbaritem path='/category'>
<template #imgs>

        <img src="../../../assets/images/tabbar/category-1.png" alt="" />
</template>
<template #active-imgs>
        <img src="../../../assets/images/tabbar/category-2.png" alt="" />
</template>
<template #text>
        <p>分类</p>
</template>
</tabbaritem>
<tabbaritem path='/shopcar'>
<template #imgs>

        <img src="../../../assets/images/tabbar/shopcar-1.png" alt="" />
</template>
<template #active-imgs>
        <img src="../../../assets/images/tabbar/shopcar-2.png" alt="" />
</template>
<template #text>
        <p>购物车</p>
</template>
</tabbaritem>
<tabbaritem path='/profile'>
<template #imgs>
        <img src="../../../assets/images/tabbar/profile-1.png" alt="" />
</template>
<template #active-imgs>
        <img src="../../../assets/images/tabbar/profile-2.png" alt="" />
</template><template #text>
        <p>个人</p>
</template>
</tabbaritem>

</div>
</div>
</template>

<script>
import tabbaritem from './tabbaritem.vue'
export default {
  components: { tabbaritem },
  
  
}
</script>
<style scoped>
#tab-bar{

  background-color: #f6f6f6;
  display: flex;
  z-index: 10000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
  box-shadow: 0 -3px 1px  rgba(149, 146, 146, 0.1)
}

</style>