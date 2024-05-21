<template>
    <div :class="['dashboard-item', { 'collapsed': isCollapsed, 'expanded': isExpanded }]">
      <div class="card">
        <div class="card-header">
          <h2>{{ title }}</h2>
          <div class="card-controls">
            <button @click="refreshContent">
              <img src="@/assets/btn/refresh.png" alt="Refresh" />
            </button>
            <button @click="toggleExpand">
              <img :src="isExpanded ? require('@/assets/btn/collapse1.png') : require('@/assets/btn/expand.png')" alt="Expand/Collapse" />
            </button>
            <button @click="toggleCollapse">
              <img src="@/assets/btn/collapse.png" alt="Collapse" />
            </button>
          </div>
        </div>
        <div class="card-body" v-if="!isCollapsed">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardBox',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isCollapsed: false,
        isExpanded: false
      };
    },
    methods: {
      refreshContent() {
        this.$emit('refresh');
      },
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
      toggleExpand() {
        this.isExpanded = !this.isExpanded;
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard-item {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 45%;
    box-sizing: border-box;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: width 0.3s;
  }
  
  .dashboard-item.expanded {
    width: 90%;
  }
  
  .dashboard-item.collapsed .card-body {
    display: none;
  }
  
  .card {
    padding: 20px;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-bottom: 15px;
  }
  
  .card-header h2 {
    font-size: 1.5rem;
    margin: 0;
  }
  
  .card-controls {
    display: flex;
    gap: 10px;
  }
  
  .card-controls button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
  
  .card-controls img {
    width: 20px;
    height: 20px;
  }
  
  .card-body {
    max-height: 300px;
    overflow-y: auto;
  }
  </style>
  