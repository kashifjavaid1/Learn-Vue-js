<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Learing Vue-js</h1>
  <!-- <EventComonent/>
  <ChildComponent/>
  <FormComponent/> -->
  <!-- <NodeComponent/>
  <PhpComponent/> -->

<button @click="tab='NodeComponent'">Node js</button>
<button @click="tab='PhpComponent'">Php</button>
<button @click="tab='FormComponent'">Form</button>
<br>
<br>
  <component :is="tab"/>

</template>
<script>
import NodeComponent from './components/NodeComponent.vue';
import PhpComponent from './components/PhpComponent.vue';

import FormComponent from './components/FormComponent.vue';



export default {
 components:{
  // EventComonent,
  // ChildComponent
  FormComponent,
    NodeComponent,PhpComponent
 },
 beforeCreate(){
   alert("Before Created Loading")
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
</style>