import {
  makeObservable,
  makeAutoObservable,
  observable,
  computed,
  action,
  runInAction
} from 'mobx';

import ItemVm from './ItemVm';

export default class AppVM {
  @observable value = '';
  @observable filter = 'all';
  @observable list = [];

  constructor() {
    makeObservable(this);
  }

  @action
  setValue = (event) => {
    this.value = event.target.value;
  };

  @action
  setFilterAll = () => {
    this.filter = 'all';
  };

  @action
  setFilterCompleted = () => {
    this.filter = 'completed';
  };

  // 很特別的寫法, 使用 get 關鍵字, 屬性值回函式, 且必需要有返回值.
  @computed
  get filterList() {
    return this.list.filter((item) => {
      return this.filter === 'all' ? true : item.isCompleted;
    });
  }

  @action
  handlerCreate = () => {
    this.list.push(
      new ItemVm({
        id: Math.random(),
        title: this.value
      })
    );

    this.value = '';
  };

  @action
  handlerRemove = (id) => {
    this.list = this.list.filter((item) => item.id !== id);
  };

  @action
  init = () => {
    // 讀取資料.
    const module = {
      value: '',

      toggleAll: false,

      filter: 'all',

      list: [
        {
          id: 1,
          title: 'HTML',
          isCompleted: false
        },
        {
          id: 2,
          title: 'CSS',
          isCompleted: true
        },
        {
          id: 3,
          title: 'JavaScript',
          isCompleted: false
        }
      ]
    };

    /**
     * 在 AppVM 獲取資料後, 將資料拋給 ItemVM, 並收回所有 ItemVM 組成陣列, 最後在 AppView 將 ItemVM 傳給 ItemView.
     */
    // this.list = module.list.map((item) => new ItemVm({ ...item }));
    // 若 data 是異步, 需要套 renInAction.
    runInAction(() => {
      this.list = module.list.map((item) => new ItemVm({ ...item }));
    });
  };
}
