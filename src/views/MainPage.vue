<template>
  <div>
    <AppHeader :loggedIn="true" />
    <MonitoringDashboard />
    <div class="main-content">
      <PingSpeed />
      <NetworkConnections />
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import MonitoringDashboard from '../views/MonitoringDashboard.vue';
import PingSpeed from '../views/PingSpeed.vue';
import NetworkConnections from '../views/NetworkConnections.vue';

export default {
  name: 'MainPage',
  components: {
    AppHeader,
    MonitoringDashboard,
    PingSpeed,
    NetworkConnections
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
}

.main-content > * {
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  height: 300px; /* 고정 높이 설정 */
}
</style>
