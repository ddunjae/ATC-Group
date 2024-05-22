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
      <div class="dropdown">
        <button class="dropdown-toggle" @click="toggleDropdown">More Options</button>
        <div v-if="isDropdownOpen" class="dropdown-menu">
          <router-link to="/page1" class="dropdown-item">Page 1</router-link>
          <router-link to="/page2" class="dropdown-item">Page 2</router-link>
          <router-link to="/page3" class="dropdown-item">Page 3</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppSidebar',
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters(['isSidebarOpen'])
  },
  methods: {
    ...mapActions(['toggleSidebar']),
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
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

.dropdown {
  margin: 10px 0;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  padding: 10px 0;
  width: 100%;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.dropdown-item {
  color: white;
  text-decoration: none;
  padding: 5px 0;
}

.dropdown-item:hover {
  background-color: #575757;
}
</style>
