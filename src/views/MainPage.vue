<template>
  <div>
    <AppHeader :loggedIn="true" />
    <div class="main">
      <h1>Dashboard</h1>
      <div class="dashboard">
        <!-- IP Addresses Widget -->
        <DashboardBox title="IP Addresses" @refresh="refreshIPAddresses">
          <table>
            <thead>
              <tr>
                <th>INTERFACE</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>external</td>
                <td>70.113.122.2</td>
              </tr>
              <!-- 추가 IP 주소 행 -->
            </tbody>
          </table>
        </DashboardBox>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import DashboardBox from '../components/DashboardBox.vue';

export default {
  name: 'MainPage',
  components: {
    AppHeader,
    DashboardBox
  },
  methods: {
    refreshIPAddresses() {
      // IP 주소 데이터를 새로고침하는 로직 추가
      console.log('IP Addresses refreshed');
    },
    refreshNetworkConnections() {
      // 네트워크 연결 데이터를 새로고침하는 로직 추가
      console.log('Network Connections refreshed');
    }
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

.dashboard {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  font-weight: bold;
}

thead {
  background-color: #f9f9f9;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
