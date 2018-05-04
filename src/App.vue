<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {};
  },
  mounted(){
    this.zoom();
  },
  methods:{
    zoom(){
      let w = window.innerWidth;
      let app = document.getElementById('app');
      app.style.zoom = w / 750;
    }
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
}
</style>
