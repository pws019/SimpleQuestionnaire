<template>
  <div>
    <QAList></QAList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QAList from '@/components/QAList.vue'; // @ is an alias to /src

@Component({
  components: {
    QAList,
  },
})
export default class Home extends Vue {
   
}
</script>
