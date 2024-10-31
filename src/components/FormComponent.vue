<template>
<form @submit.prevent="submit">
    <input  type="text" placeholder="Please Enter Name" value="name" v-model="form.name">
    <h1 v-if="error.includes('name')">Invalid Name</h1>

<br>
<br>
<input type="email" placeholder="Please Enter Email" v-model="form.email">
<h1 v-if="error.includes('email')">Invalid Email</h1>

<br>
<br>
<label for="node">Node js</label>
<input type="checkbox" name="vue" id="node" value="node" v-model="form.checkbox">
{{ item }} check
<label for="php">Node js</label>
<input type="checkbox" name="vue" id="php" value="php" v-model="form.checkbox">
<h1 v-if="error.includes('checkbox')">Please check at least one option</h1>

<br>
<br>
<button type="submit">submit</button>
</form>
<h1>Name:{{ name }}</h1>
<h1>Email:{{ email }}</h1>
<h1>{{ checkbox }}</h1>


</template>

<script>
export default {
    name:"FormCompomemt",
    data(){
     {
        return {
           form:{
            name:"",
      email:"",
      checkbox:[],
           },
      error:[],
        }
     }
    },
    methods:{
        submit(){
            this.error=[]
            if (this.form.name === "") {
        this.error.push("name");
      }else if (this.form.email === "") {
        this.error.push("email");
      }
      else if (this.form.checkbox.length === 0) {
        this.error.push("checkbox");
      }else{
        alert("form submit sucessfull")
      }
    
    }
    }
}
</script>