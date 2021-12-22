<template>
<div>
  <Card :key="index" v-for="(qaItem, index) in qaList">
    <div class="question">
      {{qaItem.title}}
    </div>
    <div class="answer">

    </div>
  </Card>
</div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

interface ChoiceAnswer {
  title: string,
  score: number,
}

interface Question {
  title: string,
  choices: Array<ChoiceAnswer>
}



@Component
export default class QAList extends Vue {
  @Prop({default: []}) private questionList!: Array<Question>;
  @Prop({default: []}) private choiceAnswerList!: Array<ChoiceAnswer>;

  score: number = 0;
  answerMap: any = {};

  get qaList() {
    const res = this.questionList.map((v, i) => {
      return {
        ...v,
        choices: this.choiceAnswerList.map((v, index) => ({
          ...v,
          index,
        }))
      }
    })
    return res;
  }
  
}
</script>
