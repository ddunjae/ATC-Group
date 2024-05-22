<template>
    <div class="ping-speed dashboard-container">
      <DashboardBox title="Ping Speeds" @refresh="refreshPingSpeeds">
        <div class="search-bar-container">
          <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar"/>
        </div>
        <table>
          <thead>
            <tr>
              <th>HOST</th>
              <th>PING</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ping, index) in filteredPings" :key="index">
              <td>{{ ping.host }}</td>
              <td>{{ ping.value }}</td>
            </tr>
          </tbody>
        </table>
      </DashboardBox>
    </div>
  </template>
  
  <script>
  import DashboardBox from '../components/DashboardBox.vue';
  
  export default {
    name: 'PingSpeed',
    components: {
      DashboardBox
    },
    data() {
      return {
        searchQuery: '',
        pings: [
          { host: 'google.com', value: '23.234' },
          { host: 'yahoo.com', value: '67.412' },
          { host: 'twitter.com', value: '34.56' }
        ]
      };
    },
    computed: {
      filteredPings() {
        return this.pings.filter(ping =>
          ping.host.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      refreshPingSpeeds() {
        console.log('Ping Speeds refreshed');
      }
    }
  };
  </script>
  
  <style scoped>
  .ping-speed {
    width: 100%;
    height: 100%;
  }
  
  .dashboard {
    height: 100%; /* 부모 요소의 높이를 채움 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  .search-bar-container {
    margin-bottom: 10px;
  }
  
  .search-bar {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    height: 100%; /* 테이블 높이 설정 */
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
  