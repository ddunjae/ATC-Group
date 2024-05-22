<template>
    <div>
      <LoadingSpinner v-if="isLoading" />
      <div class="main" v-else>
        <h1>ATC Group Service Monitoring</h1>
        <div class="content">
          <div class="hex-grid">
            <div class="hex" v-for="(item, index) in items" :key="index">
              <div class="hex-content">
                <p>{{ item.status }}</p>
                <p class="url">{{ item.url }}</p>
                <p>{{ item.value }}</p>
              </div>
            </div>
          </div>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Checkurlori</th>
                  <th>ServiceURL</th>
                  <th>ReturnValue</th>
                  <th>MonType</th>
                  <th>HttpStatus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(service, index) in services" :key="index">
                  <td>{{ service.checkurlori }}</td>
                  <td>{{ service.serviceURL }}</td>
                  <td>{{ service.returnValue }}</td>
                  <td>{{ service.monType }}</td>
                  <td>{{ service.httpStatus }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LoadingSpinner from '../components/LoadingSpinner.vue';
  
  export default {
    name: 'MonitoringDashboard',
    components: {
      LoadingSpinner
    },
    data() {
      return {
        isLoading: false,
        items: [
          { status: 'OK', url: 'www.example1.com', value: '0.111' },
          { status: 'OK', url: 'www.example2.com', value: '0.081' },
          { status: 'OK', url: 'www.example3.com', value: '0.081' },
          { status: 'OK', url: 'www.example4.com', value: '0.081' },
          { status: 'OK', url: 'www.example5.com', value: '0.081' },
          { status: 'OK', url: 'www.example6.com', value: '0.081' },
          { status: 'OK', url: 'www.example7.com', value: '0.081' }
          // 더 많은 항목 추가
        ],
        services: [
          { checkurlori: 'https://www.example1.com', serviceURL: 'www.example1.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          { checkurlori: 'https://www.example2.com', serviceURL: 'www.example2.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          { checkurlori: 'https://www.example3.com', serviceURL: 'www.example3.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          { checkurlori: 'https://www.example4.com', serviceURL: 'www.example4.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          { checkurlori: 'https://www.example5.com', serviceURL: 'www.example5.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          { checkurlori: 'https://www.example6.com', serviceURL: 'www.example6.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          { checkurlori: 'https://www.example7.com', serviceURL: 'www.example7.com', returnValue: 'OK', monType: 'appmon', httpStatus: '200' },
          

          // 더 많은 서비스 추가
        ]
      };
    },
    mounted() {
      this.setLoading(true);
      setTimeout(() => {
        this.setLoading(false);
      }, 500);
    },
    methods: {
      setLoading(loading) {
        this.isLoading = loading;
        this.$emit('loading', loading);
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  .main {
    text-align: center;
    margin-top: 100px; /* Header와의 여백 추가 */
  }
  
  h1 {
  font-size: 30px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 30px; /* 콘텐츠와 제목 사이의 여백 */
  }
  
  .content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  
  .hex-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 45%;
  }
  
  .hex {
    position: relative;
    width: 100px;
    height: 115px;
    background-color: #8BC34A;
    margin: 5px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; /* 텍스트 중앙 정렬 */
  }
  
  .hex-content {
    font-family: 'Roboto', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .hex-content p {
    margin: 2px 0; /* 텍스트 사이 여백 조정 */
  }
  
  .hex-content .url {
    font-size: 10px; /* URL 폰트 크기 조정 */
    white-space: nowrap; /* 긴 URL이 잘리지 않도록 설정 */
  }
  
  .table-container {
    width: 45%;
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Roboto', sans-serif;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    font-weight: bold;
    background-color: #f4f4f4;
    color: #333;
  }
  
  tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  thead {
    background-color: #f9f9f9;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  </style>
  