
<!-- <script>
    export default {
        name:"EventComonent",
        data(){
            {
        return {
            count:0
        }
    }
},
methods:{
        test(){
            this.count= this.count+1
        },
        descrement(){
            this.count=this.count-1;
        },
        reset(){
            this.count=this.test=0
        }
    }
}
</script> -->
<template>
    <!-- <button @click="test('click me')">Button 1</button>
    <button v-on:click="test('click me')">Button 2</button>
    <button v-on:dblclick="test('double click')">Button 3</button> -->
    <!-- <input type="text" v-model="count">
<br>
<br>
    <button @click="test">increment</button>
    <button @click="descrement">decrement</button>
    <button @click="reset">reset</button>

    <h1>{{count}}</h1> -->

    <input type="text" placeholder="Enter user Name" v-model="name">
    <br>
    <br>
    <label for="java">Java</label>
    <input type="checkbox" name="java" id="java" value="java" v-model="technlogy">  
    <label for="react">React</label>
    <input type="checkbox" name="react" id="react" value="react" v-model="technlogy">

    {{technlogy}}
    {{name}}
</template>



<!-- Two way binding -->
 <script>
export default {
    name:"EventCounter",
    data(){
        {
            return {
                name:null,
                technlogy:[]
            }
        }
    }
       
      
}
</script>