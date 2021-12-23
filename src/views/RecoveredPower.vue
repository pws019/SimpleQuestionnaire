<template>
  <div>
    <QAList :choiceAnswerList="answersConfigList" :questionList="questionList"></QAList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import QAList, { ChoiceAnswer, Question } from '@/components/QAList.vue'; // @ is an alias to /src
import QuestionConfig from '@/assets/json/RecoveredPower.json';

@Component({
  components: {
    QAList,
  },
})
export default class RecoveredPower extends Vue {
  questionList: Array<Question> = QuestionConfig.questions;
  answersConfigList: Array<ChoiceAnswer> = [
     { title: '非常弱', score: 1 },
     { title: '较弱', score: 2 },
     { title: '一般', score: 3 },
     { title: '较强', score: 4 },
     { title: '非常强', score: 5 },
   ]
}
</script>
