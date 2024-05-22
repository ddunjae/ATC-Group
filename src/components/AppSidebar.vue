<template>
  <div>
    <div :class="['sidebar', { 'open': isSidebarOpen }]">
      <button class="sidebar-toggle" @click="toggleSidebar">
        <span v-if="isSidebarOpen">&#10006;</span> <!-- X 아이콘 -->
        <span v-else>&#9776;</span> <!-- 메뉴 아이콘 -->
      </button>
      <router-link to="/monitoring-dashboard" class="sidebar-item">Monitoring Dashboard</router-link>
      <router-link to="/ping-speed" class="sidebar-item">Ping Speed</router-link>
      <router-link to="/network-connections" class="sidebar-item">Network Connections</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppSidebar',
  computed: {
    ...mapGetters(['isSidebarOpen'])
  },
  methods: {
    ...mapActions(['toggleSidebar'])
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 60px; /* 헤더 높이만큼 아래로 위치 */
  left: 0;
  width: 250px;
  height: calc(100% - 60px); /* 헤더 높이를 제외한 전체 높이 */
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transform: translateX(-250px);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  align-self: flex-end; /* 오른쪽 끝에 배치 */
}

.sidebar-item {
  color: white;
  text-decoration: none;
  margin: 10px 0;
}

.sidebar-item:hover {
  background-color: #575757;
  padding: 5px;
}
</style>
