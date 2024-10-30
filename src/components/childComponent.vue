<template>
    <h1>Child Component</h1>
    <button @click="sendMessage">Send Message to Parent</button>
  </template>
  
  <script>
  export default {
    name: "ChildComponent",
    methods: {
      sendMessage() {
        this.$emit('message-from-child', 'Hello from Child!'); 
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: black;
  }
  </style>
  