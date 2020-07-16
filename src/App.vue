<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      zoomvalue:1,
    };
  },
  created:function () {
    console.log('屏幕分辨率',window.screen.width);
    if(window.screen.width>=1500){
      this.zoomvalue=1;
    }else if(window.screen.width>=1024){
      this.zoomvalue=0.75;
    } else if(window.screen.width>=720){
      this.zoomvalue=0.6;
    }
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: puhuiti-regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
