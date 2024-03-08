<template>
    <div class="contact-me-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to discuss a project, feel free to reach out to me using the contact form below.</p>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" v-model="formData.name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="email" v-model="formData.email" required>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" v-model="formData.message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-md-6">
            <img src="https://via.placeholder.com/400" alt="Contact Me" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactMeSection',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', this.formData);
        // You can add additional logic here, such as sending form data to a server
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-me-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .contact-me-section p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  .contact-me-section .btn-primary {
    font-size: 1.1rem;
    border-radius: 30px;
    padding: 12px 30px;
    margin-top: 20px;
  }
  
  .contact-me-section img {
    max-width: 100%;
  }
  </style>
  