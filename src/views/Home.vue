<template>
  <div class="main">
    <h1 class="title">主页</h1>
    <ul>
      <li class="test-item"><router-link to="/recovered-power">复原力自评</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.main {
  padding: 10px;
}
.title {
  margin-bottom: 16px;
}
.test-item {
  font-size: 24px;
}
</style>