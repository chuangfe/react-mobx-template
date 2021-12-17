import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import clsx from 'clsx';

import './style.scss';

@observer
export default class ItemView extends React.Component {
  // observer 監視的 view, 生命週期的 this 指向會失蹤, 故生命週期也需要使用箭頭函式.
  componentDidMount = () => {
    // console.log('bindReactions');

    this.props.vm.bindReactions();
  };

  // 若不想使用箭頭函式, 則需要加上 @action.bound 修正 this 指向.
  @action.bound
  componentWillUnmount() {
    // console.log('removeReactions');

    this.props.vm.removeReactions();
  }

  render() {
    // handlerRemove 來自 AppVM 的方法.
    const { handlerRemove } = this.props;
    // data update 來自 ItemVm 的屬性與方法.
    const {
      id,
      title,
      isCompleted,
      isEditing,
      setTitle,
      setEditing,
      setCompleted
    } = this.props.vm;

    return (
      <li
        className={clsx({
          'list-item': true,
          completed: isCompleted,
          editing: isEditing
        })}
      >
        <input
          type="checkbox"
          className="item-completed-checkbox"
          checked={isCompleted}
          onChange={setCompleted}
        />

        <p className="item-title">{title}</p>

        <button
          type="button"
          className="item-remove-button"
          onClick={() => {
            handlerRemove(id);
          }}
        >
          刪除
        </button>

        <input
          type="text"
          className="item-editing-input"
          value={title}
          onChange={setTitle}
        />

        <button
          type="button"
          className="item-editing-button"
          onClick={setEditing}
        >
          編輯
        </button>

        <button type="button" className="item-save-button" onClick={setEditing}>
          結束編輯
        </button>
      </li>
    );
  }
}
