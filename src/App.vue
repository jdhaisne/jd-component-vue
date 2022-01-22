<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div style="display: flex;">
  <jd-button type="primary">Click me !</jd-button>
  <jd-button type="success">Click me !</jd-button>
  <jd-button type="danger" size="small">Click me !</jd-button>
  <jd-button type="warning">Click me !</jd-button>
  <jd-button type="primary" rounded>Click me !</jd-button>
  <jd-button type="primary" text>Click me !</jd-button>
  <jd-button type="warning" outlined size="big">Click me !</jd-button>
</div>
<div>
  <jd-button type="success" block>Click me !</jd-button>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
