/**
 * 概念敘述, 使用 class 與 mobx methods 將資料與 mobx 包裝為一個實例, 同時將需要資料的 function jsx template 也使用 mobx methods 包裝成實例, 最後將 template 實例, 與資料實例, 一起丟給 react 繪製畫面.
 */
import React from 'react';
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
import { observer } from 'mobx-react';
import clsx from 'clsx';

import './App.scss';

import AppVm from './viewModels/AppVm';
import ItemView from './components/ItemView';

// 測試 Reactions 功能, autorun 監視指定的實體屬性.
// 針對複雜類型的值, 需要在 autorun 內只用物件的方法才能監視, 注意方法不能改變原本的值.
// autorun(() => {
//   console.log(
//     'AppVm list:',
//     newAppVM.list.map((item) => item)
//   );
// });

// 測試 Reactions 功能, reaction 監視指定的實體屬性.
// reaction(
//   // 指定監視的實體屬性.
//   () => newAppVM.value,
//   // value 屬性值當前的值.
//   // preValue 屬性值更新前的值.
//   (value, preValue) => {
//     console.log('value: ', value);
//     console.log('preValue: ', preValue);
//   }
// );

// 待補充, 看介紹與異步有關.
// when(
//   () => {},
//   () => {}
// );

/**
 * 裝飾器語法, 讓 mobx-react 監視這個 class 的 render.
 */
@observer
class App extends React.Component {
  // 在 app view 上新建, app view model.
  vm = new AppVm();

  componentDidMount() {
    // 在 app view model 新建, item view model 集合的陣列.
    this.vm.init();
  }

  render() {
    const { vm } = this;

    return (
      <div className="app-container">
        <h1 className="title">Toodo List</h1>

        <div className="create-container">
          <input type="text" value={vm.value} onChange={vm.setValue} />

          <button type="button" onClick={vm.handlerCreate}>
            新增
          </button>
        </div>

        <div className="list-container">
          <ul className="list">
            {/* 對 item view model 迴圈 */}
            {vm.filterList.map((todoVm) => {
              // 將 itemVM 本身, 傳給 itemView.
              // 將 appVM 的 handlerRemove 傳給 itemView.
              return (
                <ItemView
                  key={todoVm.id}
                  vm={todoVm}
                  handlerRemove={vm.handlerRemove}
                />
              );
            })}
          </ul>
        </div>

        <div className="filter-container">
          <button
            type="button"
            className={clsx({
              'all-button': true,
              active: vm.filter === 'all'
            })}
            onClick={vm.setFilterAll}
          >
            全部
          </button>

          <button
            type="button"
            className={clsx({
              'all-button': true,
              active: vm.filter === 'completed'
            })}
            onClick={vm.setFilterCompleted}
          >
            已完成
          </button>
        </div>
      </div>
    );
  }
}

export default App;
