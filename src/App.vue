<script setup lang="ts">
import JdCheckbox from './components/checkbox/Jd-checkbox.vue';
import JdRadio from './components/radio/Jd-radio.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div class="component-showcase">
  <jd-button type="primary" icon="face">Click me !</jd-button>
  <jd-button type="success">Click me !</jd-button>
  <jd-button type="danger" size="small">Click me !</jd-button>
  <jd-button type="warning">Click me !</jd-button>
  <jd-button type="primary" rounded>Click me !</jd-button>
  <jd-button type="primary" text>Click me !</jd-button>
  <jd-button type="warning" outlined size="big" pulse>Click me !</jd-button>
</div>
<div>
  <jd-button type="success" block>Click me !</jd-button>
</div>
<div class="component-showcase"> 
  <jd-checkbox type="warning" label="warning" v-model="checkboxValue1" disabled>test1</jd-checkbox>
  <jd-checkbox type="primary" label="primary" v-model="checkboxValue2" line-through>
    <template v-slot:default>label</template>
    <template v-slot:sublabel >subLabel</template>
  </jd-checkbox>
  <jd-checkbox type="warning" label="warning" pulse v-model="checkboxValue3">test3</jd-checkbox>
</div>

<div class="component-showcase">
  <jd-radio v-model="radioModel1" value="0" label="choix 1"></jd-radio>
  <jd-radio v-model="radioModel1" type="success" value="1" label="choix 2"></jd-radio>
  <jd-radio v-model="radioModel1" type="warning" value="2" label="choix 3"></jd-radio>
  <jd-radio v-model="radioModel1" type="danger" pulse sub-label="subLabel 1" value="3" label="choix 4"></jd-radio>
  <jd-radio v-model="radioModel1" type="danger" disabled sub-label="subLabel 2" value="4" label="choix 5"></jd-radio>
</div>
</template>
<script lang="ts">

export default {
  name: "app",
  data: () => ({
    checkboxValue1: false,
    checkboxValue2: false,
    checkboxValue3: true,
    radioModel1: '2',
  }),
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.component-showcase {
  display: flex;
}
</style>
