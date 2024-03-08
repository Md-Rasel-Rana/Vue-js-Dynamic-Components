<!-- ChildComponent.vue -->
<template>
    <button @click="sendDataToParent">Send Data to Parent</button>
  </template>
  
  <script>
  export default {
    methods: {
      sendDataToParent() {
        this.$emit('childEvent', 'Data sent from child to parent');
      }
    }
  }
  </script>
  