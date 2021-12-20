/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';
import clsx from 'clsx';

import QuestionsVM from '../viewModels/QuestionsVM';

@observer
class QuestionsView extends React.Component {
  vm = new QuestionsVM();

  // 選擇 0 分的答案.
  handlerNext = () => {
    const answerIndex = 0;
    this.vm.selectAnswer(answerIndex);
    this.vm.videoPlay();
  };

  // 選擇 1 分的答案.
  handlerIncrease = () => {
    const answerIndex = 1;
    this.vm.selectAnswer(answerIndex);
    this.vm.videoPlay();
  };

  // 過場影片播放時.
  handlerVideoPlay = (event) => {
    const video = event.target;
    video.muted = false;
    video.volume = 0.5;
  };

  componentDidMount() {
    this.vm.init({ history: this.props.history });
  }

  render() {
    const { vm, handlerNext, handlerIncrease, handlerVideoPlay } = this;

    return (
      <div>
        <button type="button" onClick={handlerNext} disabled={vm.isDisabled}>
          0
        </button>

        <button
          type="button"
          onClick={handlerIncrease}
          disabled={vm.isDisabled}
        >
          1
        </button>

        <button
          type="button"
          onClick={vm.prevQuestion}
          disabled={vm.isDisabled}
        >
          上一題
        </button>

        <hr />

        <div>
          {vm.questions.length && `問題: ${vm.findQuestionData.question}`}
        </div>

        <hr />

        <p>{`Index: ${vm.index}`}</p>

        <p>{`Answers length: ${vm.answers.length}`}</p>

        <hr />

        <ul>
          {vm.answers.map((item) => {
            return (
              <li key={Math.random()}>
                <p>{`class: ${item.class}, fraction: ${item.fraction}`}</p>
              </li>
            );
          })}
        </ul>

        <video
          src={vm.answerVideo}
          muted
          autoPlay
          onPlay={handlerVideoPlay}
          onEnded={vm.videoEnd}
        />
      </div>
    );
  }
}

export default withRouter(QuestionsView);
