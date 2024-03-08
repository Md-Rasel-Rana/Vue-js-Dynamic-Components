<template>
  <div >
    <p>Base Number: {{ baseNumber }}</p>
    <p>Squared Number: {{ squaredNumber }}</p>
    <p>{{receivedProp}}</p>
</div>
  
  </template>
  
<script>
// Vue instance
export default {
    name: 'MyWorld',
    props:{
       receivedProp:String
    },
  
}
</script>
