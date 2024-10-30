<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Learing Vue-js</h1>
  <EventComonent/>
</template>
<script>
import EventComonent from './components/EventComonent.vue';



export default {
 components:{
  EventComonent
 }
}
</script>
<style scoped>
h1{
  color: orange;
}
</style>