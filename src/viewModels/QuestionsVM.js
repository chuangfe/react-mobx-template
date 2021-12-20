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

import { questionsClassX, questionsClassY, pages } from '../global/constants';

class QuestionsVM {
  // 按鈕鎖定.
  @observable isDisabled = false;
  // 當前是否在過場影片
  @observable isPlay = false;
  // 當前題數
  @observable index = 0;
  // 題目的陣列.
  @observable questions = [];
  // 答案的陣列.
  @observable answers = [];

  constructor() {
    makeObservable(this);
  }

  // 當前的題目.
  @computed
  get findQuestionData() {
    return this.questions[this.index];
  }

  // 過場影片
  @computed
  get answerVideo() {
    // 當前不是在過場中.
    if (!this.isPlay) return;
    return this.answers[this.index].video;
  }

  // 計算答案.
  @computed
  get calcFraction() {
    if (this.answers.length < this.questions.length) return '';

    // 兩種題目的結果.
    const answersClassX = this.answers.filter((item) => item.class === 'x');
    const answersClassY = this.answers.filter((item) => item.class === 'y');

    // 兩種題目的分數.
    const fractionClassX = answersClassX.reduce((sum, item) => {
      return sum + item.fraction;
    }, 0);
    const fractionClassY = answersClassY.reduce((sum, item) => {
      return sum + item.fraction;
    }, 0);

    return { fractionClassX, fractionClassY };
  }

  // 開啟按鈕.
  @action
  clearDisabled = () => {
    this.isDisabled = false;
  };

  // 鎖定按鈕.
  @action
  setDisabled = () => {
    this.isDisabled = true;
  };

  // 播放過場影片
  @action
  videoPlay = () => {
    // 正在過場中.
    this.isPlay = true;
    // 鎖定按鈕.
    this.setDisabled();
  };

  // 過場影片播放結束.
  @action
  videoEnd = () => {
    // 過場結束.
    this.isPlay = false;
    // 開啟按鈕.
    this.clearDisabled();
    // 至下一題.
    this.nextQuestion();
  };

  // 選擇答案
  @action
  selectAnswer = (num) => {
    // 鎖定按鈕.
    if (this.isDisabled) return;

    const { findQuestionData } = this;
    const data = {
      class: findQuestionData.class,
      fraction: findQuestionData.answers[num].fraction,
      video: findQuestionData.answers[num].video
    };

    // 紀錄答案, 因為有返回上一題, 故需要判斷當前的問題是否已經回答過.
    if (this.answers[this.index]) {
      this.answers.splice(this.index, 1, data);
    } else {
      this.answers.push(data);
    }
  };

  // 前往下個題目, 在過場影片播放結束後執行.
  @action
  nextQuestion = () => {
    const calc = this.index + 1;
    const { fractionClassX, fractionClassY } = this.calcFraction;

    // 下一題.
    if (calc < this.questions.length) {
      this.index = calc;
    }
    // 選擇題結束.
    else {
      // 鎖定按鈕.
      this.setDisabled();
      // 跳轉至答案頁面.
      this.history.push(`${pages.Traits}/${fractionClassX}/${fractionClassY}`);
    }
  };

  // 回到上個題目.
  @action
  prevQuestion = () => {
    const calc = this.index - 1;

    // 只要上一頁不是第一題都可以返回.
    if (calc >= 0) {
      this.index = calc;
      this.clearDisabled();
    }
  };

  // 題目順序打亂
  @action
  init = ({ history }) => {
    // 保存 history 換頁函式.
    this.history = history;

    // 複製題目.
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
    // this.questions = [...questionsX, ...questionsY];
    this.questions = [...questionsClassX, ...questionsClassY];
  };
}

export default QuestionsVM;
