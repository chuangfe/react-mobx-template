/* eslint-disable */
import {
  makeObservable,
  makeAutoObservable,
  observable,
  computed,
  action,
  autorun,
  reaction,
  runInAction,
  when
} from 'mobx';
import { Component } from 'react/cjs/react.production.min';

import {
  questionsClassX,
  questionsClassY,
  personalityTraits
} from '../global/constants';

class QuestionsVM {
  // 作答按鈕鎖定.
  @observable disabled = false;
  // 當前是否在過場動畫
  @observable transition = false;
  // 當前題數
  @observable index = 0;
  // 題目的陣列.
  @observable questions = [1];
  // 答案的陣列.
  @observable answers = [];
  // 人格判斷.
  @observable result = '';

  constructor() {
    makeObservable(this);
  }

  // 當前的題目.
  @computed
  get findQuestionData() {
    return this.questions[this.index];
  }

  @computed
  get calcResult() {
    if (this.answers.length < this.questions.length) return '';

    // 兩種題目的結果.
    const answersClassX = this.answers.filter((item) => item.class === 'x');
    const answersClassY = this.answers.filter((item) => item.class === 'y');

    // 兩種題目的分數.
    const fractionClassX = answersClassX.reduce((sum, item) => {
      const calc = sum + item.fraction;
      return calc;
    }, 0);
    const fractionClassY = answersClassY.reduce((sum, item) => {
      const calc = sum + item.fraction;
      return calc;
    }, 0);

    const findPersonality = personalityTraits.filter((item) => {
      const flagX =
        fractionClassX >= item.fractionMinClassX &&
        fractionClassX <= item.fractionMaxClassX;
      const flagY =
        fractionClassY >= item.fractionMinClassY &&
        fractionClassY <= item.fractionMaxClassY;

      return flagX && flagY;
    });

    console.log(findPersonality);

    return findPersonality[0].answer;
  }

  // 開始做題.
  @action
  start = () => {
    this.disabled = false;
  };

  // 做題結束
  end = () => {
    this.disabled = true;
  };

  // 選擇答案
  @action
  selectAnswer = (num) => {
    // 鎖定按鈕.
    if (this.disabled) return;

    const { findQuestionData } = this;
    const data = {
      class: findQuestionData.class,
      fraction: findQuestionData.answers[num].fraction
    };

    // 紀錄答案, 因為有返回上一題, 故需要判斷當前的問題是否已經回答過.
    if (this.answers[this.index]) {
      this.answers.splice(this.index, 1, data);
    } else {
      this.answers.push(data);
    }

    // 前往下個題目.
    this.nextQuestion();
  };

  // 前往下個題目.
  @action
  nextQuestion = () => {
    const calc = this.index + 1;

    if (calc < this.questions.length) {
      this.index = calc;
    } else {
      // 做題結束
      this.end();
    }
  };

  // 回到上個題目.
  @action
  prevQuestion = () => {
    const calc = this.index - 1;

    // 只要上一頁不是第一題都可以返回.
    if (calc >= 0) {
      this.index = calc;
      this.start();
    }
  };

  // 題目順序打亂
  @action
  init = () => {
    const questionsX = questionsClassX.slice(0);
    const questionsY = questionsClassY.slice(0);

    // 打亂題目的順序.
    questionsX.sort(() => {
      const num = Math.random() > 0.5 ? -1 : 1;
      return num;
    });
    // 打亂題目的順序.
    questionsY.sort(() => {
      const num = Math.random() > 0.5 ? -1 : 1;
      return num;
    });

    // 把題目組合.
    this.questions = [...questionsX, ...questionsY];
  };
}

export default QuestionsVM;
