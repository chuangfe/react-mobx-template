import React from 'react';
import { observer } from 'mobx-react';
import clsx from 'clsx';

import QuestionsVM from '../viewModels/QuestionsVM';

@observer
class QuestionsView extends React.Component {
  vm = new QuestionsVM();

  handlerNext = () => {
    this.vm.selectAnswer(0);
  };

  handlerIncrease = () => {
    this.vm.selectAnswer(1);
  };

  componentDidMount() {
    this.vm.init();
  }

  render() {
    const { vm, handlerNext, handlerIncrease } = this;

    return (
      <div>
        <button type="button" onClick={handlerNext} disabled={vm.disabled}>
          0
        </button>
        &nbsp;&nbsp;
        <button type="button" onClick={handlerIncrease} disabled={vm.disabled}>
          1
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          onClick={vm.prevQuestion}
          disabled={!vm.answers.length}
        >
          上一題
        </button>
        <hr />
        <div>
          {vm.questions.length && `問題: ${vm.findQuestionData.question}`}
        </div>
        <hr />
        <div>{vm.calcResult && `人格結果: ${vm.calcResult}`}</div>
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
      </div>
    );
  }
}

export default QuestionsView;
