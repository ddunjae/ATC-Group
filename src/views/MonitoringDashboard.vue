<template>
    <div>
      <AppHeader :loggedIn="true" />
      <AppSidebar />
      <div class="dashboard-content">
        <p>Monitoring Dashboard Content is hidden</p>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  import AppSidebar from '../components/AppSidebar.vue';
  
  export default {
    name: 'MonitoringDashboard',
    components: {
      AppHeader,
      AppSidebar
    }
  };
  </script>
  
  <style scoped>
  .dashboard-content {
    display: none;
  }
  </style>
  