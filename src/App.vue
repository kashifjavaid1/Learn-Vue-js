<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Learing Vue-js</h1>
  <EventComonent/>
  <ChildComponent/>
  <FormComponent/>
</template>
<script>
// import ChildComponent from './components/childComponent.vue';
import EventComonent from './components/EventComonent.vue';
// import FormComponent from './components/FormComponent.vue';



export default {
 components:{
  EventComonent,
  // ChildComponent
  // FormComponent
 }
}
</script>
<style scoped>
h1{
  color: orange;
}
</style>