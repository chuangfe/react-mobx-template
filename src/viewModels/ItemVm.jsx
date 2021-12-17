import {
  makeObservable,
  makeAutoObservable,
  observable,
  computed,
  action,
  autorun,
  runInAction
} from 'mobx';

export default class ItemVm {
  // 裝飾器語法, 註冊需要 mobx 監視的值.
  @observable title = '';
  @observable isEditing = false;
  @observable isCompleted = false;

  // 參數是 AppVM 獲取的原始 json 資料.
  constructor({ id, title, isCompleted }) {
    // create item 時傳入的值, id 不需要修改, 故不註冊.
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted || this.isCompleted;

    makeObservable(this);
  }

  // 裝飾器語法, 指定 function 是 action.
  @action
  setTitle = (event) => {
    this.title = event.target.value;
  };

  @action
  setEditing = () => {
    this.isEditing = !this.isEditing;
  };

  @action
  setCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };

  bindReactions = () => {
    // 新增監視.
    this.disposer = autorun(() => {
      console.log('ItemVm title:', this.title);
    });
  };

  removeReactions = () => {
    // 刪除監視.
    this.disposer();
  };

  /**
   * 需要特別注意, 在 m v vm 的設計中, VM 通常是沒有 render 函式的, 故生命週期可能不會被觸發, 但是如果我想要讓 vm 使用 mobx reaction 監視自己的屬性, 我需要將 reaction 的賦值到 vm 身上的動作包裝為函式, 然後在 view 的生命週期中調用 vm 包裝的函式.
   */
  // componentDidMount() {}
  // componentWillUnmount() {}
}
