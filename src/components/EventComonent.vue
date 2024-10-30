<template>
    <!-- <button @click="test('click me')">Button 1</button>
    <button v-on:click="test('click me')">Button 2</button>
    <button v-on:dblclick="test('double click')">Button 3</button> -->

    <button @click="test">increment</button>
    <button @click="descrement">decrement</button>
    <button @click="reset">reset</button>
    <h1>{{count}}</h1>
</template>

<script>
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
</script>