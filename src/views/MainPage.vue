<template>
  <div>
    <AppHeader :loggedIn="true" />
    <LoadingSpinner v-if="isLoading" />
    <div class="main" v-else>
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
import LoadingSpinner from '../components/LoadingSpinner.vue';

export default {
  name: 'MainPage',
  components: {
    AppHeader,
    DashboardBox,
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    refreshIPAddresses() {
      this.setLoading(true);
      // IP 주소 데이터를 새로고침하는 로직 추가
      setTimeout(() => {
        console.log('IP Addresses refreshed');
        this.setLoading(false);
      }, 2000); // 예시: 2초 후에 로딩 종료
    },
    setLoading(loading) {
      this.isLoading = loading;
      this.$emit('loading', loading);
    }
  },
  mounted() {
    this.setLoading(true);
    // 예시: 페이지 로드 시 데이터 로드
    setTimeout(() => {
      this.setLoading(false);
    }, 500); // 0.5초 로딩적용
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
