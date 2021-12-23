<template>
<div class="questions">
  <div :key="index" v-for="(qaItem, index) in qaList" class="question-item">
    <Card>
      <div class="question">
        {{index+1}}.{{qaItem.title}}
      </div>
      <div class="answer" @on-change="updateScore">
        <RadioGroup>
          <div class="radio-item" :key="choiceIndex" @click="updateScore(index, choiceItem.score)" v-for="(choiceItem, choiceIndex) in qaItem.choices" >
            <Radio 
              :label="choiceItem.title"
            >
            </Radio>
          </div>
          
        </RadioGroup>
      </div>
    </Card>
  </div>
  <div class="result-panel">
    <Alert type="success">您总计得分:{{score}}分</Alert>
  </div>
  <Affix :offset-bottom="10">
    <div class="score-tip">
      <div class="score-tip-text">
        <Alert type="success">您总计得分:{{score}}分</Alert>
      </div>
      
    </div>
    
  </Affix>

</div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export interface ChoiceAnswer {
  title: string,
  score: number,
}

export interface Question {
  title: string,
  // choices: Array<ChoiceAnswer>
}

console.log('qalist load')

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
  
  // questionIndex: number, questionScore:number
  updateScore(questionIndex:number, questionScore:number) {
    this.answerMap[questionIndex] = questionScore;
    let tmpScore = 0;
    Object.keys(this.answerMap).forEach((objKey) => {
      // console.log()
      tmpScore += this.answerMap[objKey];
    })
    this.score = tmpScore;
  }

  // @Watch('answerMap')
  // onAnswerMapChange(val: any) {
  //   console.log(val);
  // }

}
</script>

<style lang="less">
.questions {
  padding: 10px;
}

.question {
  margin-bottom: 10px;
}

.question-item + .question-item {
  margin-top: 10px;
}

.answer {
  .ivu-radio-group {
    display: flex;
    flex-direction: row;
  }
  .ivu-radio-wrapper {
    margin-right: 8px;
  }
}

.score-tip-text {
  float: right;
}

.radio-item {
  display: flex;
  align-items: center;
}

.result-panel {
  margin-top: 10px;
}
</style>