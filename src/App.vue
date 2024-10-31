<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Learing Vue-js</h1>
 >

<button @click="tab='NodeComponent'">Node js</button>
<button @click="tab='PhpComponent'">Php</button>
<button @click="tab='FormComponent'">Form</button>
<br>
<br>
  <component :is="tab"/> -->

<!-- </template> -->

<!-- <script>
import NodeComponent from './components/NodeComponent.vue';
import PhpComponent from './components/PhpComponent.vue';

import FormComponent from './components/FormComponent.vue';



export default {
 components:{
  
  FormComponent,
    NodeComponent,PhpComponent
 },
 beforeCreate(){
   alert("Before Created LOA")
 },
 data(){
return {
  tab:'NodeComponent'
}
 }
}
</script>
<style scoped>
h1{
  color: orange;
}
</style> -->



<template>
  <router-link to="/">HomeComponent</router-link>
  <br>
  <router-link to="/about">PhpComponent</router-link>
  <br>
  <router-link to="/php">NodeComponent</router-link>
  <br>
  <br>
  <router-link to="/user/">Dyanmic User</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name:"App"
}
</script>