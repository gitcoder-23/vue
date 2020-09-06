<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <!--Home msg="Welcome To Home"/-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    //Home,
    HelloWorld
  },
 /*  created(){
    
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
  } */
}


</script>

<style>
/* @import '/assets/css/style.css'; */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
