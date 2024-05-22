<template>
    <div class="network-connections dashboard-container">
      <DashboardBox title="Network Connections" @refresh="refreshNetworkConnections">
        <div class="search-bar-container">
          <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar"/>
        </div>
        <table>
          <thead>
            <tr>
              <th>CONNECTIONS</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(connection, index) in filteredConnections" :key="index">
              <td>{{ connection.connections }}</td>
              <td>{{ connection.address }}</td>
            </tr>
          </tbody>
        </table>
      </DashboardBox>
    </div>
  </template>
  
  <script>
  import DashboardBox from '../components/DashboardBox.vue';
  
  export default {
    name: 'NetworkConnections',
    components: {
      DashboardBox
    },
    data() {
      return {
        searchQuery: '',
        connections: [
          { connections: '1', address: '127.0.0.1:48562' },
          { connections: '1', address: '127.0.0.1:48564' },
          { connections: '1', address: '127.0.0.1:48708' },
          { connections: '3', address: '127.0.0.1:8080' },
          { connections: '1', address: '192.241.178.140:443' },
          { connections: '2', address: '2657:f9b0:9000:802::443' }
        ]
      };
    },
    computed: {
      filteredConnections() {
        return this.connections.filter(connection =>
          connection.address.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      refreshNetworkConnections() {
        console.log('Network Connections refreshed');
      }
    }
  };
  </script>
  
  <style scoped>
  .network-connections {
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
  