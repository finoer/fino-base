/**
 * @func 进入loading模式
 * @parans { show - 是否展示loading }
 */

class Loading {
  public element: HTMLElement
  constructor() {
    this.element = this.init()
  }
  init(): HTMLElement {
    const wrapper = document.createElement('div');
    const style = `background: #eff0f1;width:100%; height:100%; position: fixed; display: flex; align-items: center; justify-content: center`
    wrapper.setAttribute('style', style)

    // 创建loading
    const loading = `<img style="width: 300px;height: 300pxss;" src="/loading.svg"/>`
    wrapper.innerHTML = loading;

    document.body.appendChild(wrapper)

    return wrapper
  }

  show() {
    this.element.style.display = 'flex'
  }

  hide() {
    // setTimeout(() => {
    this.element.style.display = 'none'

    // }, 1000)
  }
}


export default  Loading
