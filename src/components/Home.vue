<template>
    <div class="hero">
      <div class="container">
        <h1>Welcome to My Vue.js App</h1>
        <p>A simple example of a Bootstrap hero section in Vue.js</p>
        <button class="btn btn-primary">Learn More</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
  .hero {
    background-color: #f8f9fa;
    padding: 60px 0;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 1.25rem;
    margin-bottom: 40px;
  }
  
  .hero button {
    font-size: 1.25rem;
    border-radius: 30px;
    padding: 12px 30px;
  }
  </style>
  