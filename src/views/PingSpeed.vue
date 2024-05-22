<template>
    <div>
      <AppHeader :loggedIn="true" />
      <AppSidebar />
      <div class="ping-speed-content">
        <p>Ping Speed Content is hidden</p>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  import AppSidebar from '../components/AppSidebar.vue';
  
  export default {
    name: 'PingSpeed',
    components: {
      AppHeader,
      AppSidebar
    }
  };
  </script>
  
  <style scoped>
  .ping-speed-content {
    display: none;
  }
  </style>
  