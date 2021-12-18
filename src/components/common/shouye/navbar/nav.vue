<template>
        <div class="nav">
    <slot name="l"></slot>
    <div class="m">
    <slot name="mm"></slot>
    </div>
    <slot name="r"></slot>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
.nav{
    width: 100%;
    box-shadow: 0 1px 2px 3px rgba(109, 101, 101, 0.1);
    text-align: center;

    line-height: 68px;
    
    display: flex;
    height: 68px;
    background-color: pink;
}
.l{
    width: 65px;
    background-color: pink;
}
.r{
    width: 65px;

    background-color: pink;
}
.m{
    margin: 0 auto;
    background-color: pink;
    flex: 1;
     font-size: 28px;
    font-weight: 700;
    color: white;
}

</style>