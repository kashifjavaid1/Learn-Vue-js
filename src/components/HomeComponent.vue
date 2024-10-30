<template>
  <h1>Hello Home Component Call</h1>
  <h1 id="title">{{title}}</h1>
  <h1>Hello {{ "Hello".length }}</h1>
  <h1>Email: {{email}}</h1>
  <h1>Name: {{name}}</h1>
  <h1>Get Name: {{getName("kashif")}}</h1>
</template>
<script>
export default {
  name:"HomeComponent",
  props:{
    title:String,
  },
  data(){
    return {
      email:"kashif@gmail.com",
      name:"Vue js",
       getName:function($name){
return $name
       }
    }
  }
}
</script>

<style scoped>
h1{
  color: blue;
}
#title{
  color: purple;
  font-size: 50px;
}
</style>