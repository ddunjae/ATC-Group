<template>
    <div>
      <AppHeader :loggedIn="true" />
      <div class="main">
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  
  export default {
    name: 'NetworkPage',
    components: {
      AppHeader
    }
  };
  </script>
  
  <style scoped>
  .main {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  p {
    margin-top: 20px;
  }
  
  a {
    text-decoration: none;
    color: #42b983;
    font-weight: bold;
  }
  
  a:hover {
    color: #369970;
  }
  </style>
  