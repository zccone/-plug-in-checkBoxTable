<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data:function(){
    return {
      title:"张一井的技术博客"
    }
  },
  mounted(){
    let body_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.$store.state.bodyHeight=(body_h);
    console.log(body_h)
  }
}
</script>
<style>
  @import "assets/css/main.css";
  @import "assets/css/global.css";

</style>
<style>
.header{
  height: 70px;
  background: #000;
  opacity: 0.8;
  color: #fff;
  font-weight: bold;font-size: 28px !important;line-height: 70px;
  text-align: left;
}
  .logo{width: 70px;height: 70px;margin: 0 30px}
  .logo img{width: 100%}
</style>
