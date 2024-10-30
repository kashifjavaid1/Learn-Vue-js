<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Learing Vue-js</h1>
 <HomeComponent title="kashif"/>
</template>
<script>
import HomeComponent from './components/HomeComponent.vue';
export default {
 components:{
  HomeComponent
 }
}
</script>
<style scoped>
h1{
  color: orange;
}
</style>