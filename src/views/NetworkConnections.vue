<template>
    <div>
      <AppHeader :loggedIn="true" />
      <AppSidebar />
      <div class="network-connections-content">
        <p>Network Connections Content is hidden</p>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  import AppSidebar from '../components/AppSidebar.vue';
  
  export default {
    name: 'NetworkConnections',
    components: {
      AppHeader,
      AppSidebar
    }
  };
  </script>
  
  <style scoped>
  .network-connections-content {
    display: none;
  }
  </style>
  