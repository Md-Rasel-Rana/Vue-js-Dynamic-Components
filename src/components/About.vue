<template>
    <div class="about-me-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>About Me</h2>
            <p>
              I'm John Doe, a passionate web developer based in VueCity. I have a strong foundation in web development technologies such as HTML, CSS, JavaScript, and Vue.js.
            </p>
            <p>
              I love creating responsive and user-friendly web applications that provide great user experiences. In my free time, I enjoy exploring the latest trends in web development and experimenting with new technologies.
            </p>
            <p>
              Feel free to contact me if you have any questions or would like to collaborate on a project.
            </p>
            <a href="#" class="btn btn-primary">Contact Me</a>
          </div>
          <div class="col-md-6">
            <img src="https://via.placeholder.com/400" alt="Profile Picture" class="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMeSection'
  }
  </script>
  
  <style scoped>
  .about-me-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .about-me-section p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  .about-me-section .btn-primary {
    font-size: 1.1rem;
    border-radius: 30px;
    padding: 12
  }
</style>  