function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn('Current execute action is empty!');
}

// 我们首先设置一个用于通信的Actions类

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    offGlobalStateChange: emptyAction
  };
  constructor() {}
  // 默认值为空Action

  // 设置actions
  setActions(actions: any) {
    this.actions = actions;
  }

  // 监听
  onGlobalStateChange(...args: any) {
    const { onGlobalStateChange } = this.actions;
    return onGlobalStateChange && onGlobalStateChange(...args as []);
  }
  // 传值
  setGlobalState(...args: any) {
    const { setGlobalState } = this.actions;
    return setGlobalState && setGlobalState(...args as []);
  }
}

const actions = new Actions();
export default actions;
