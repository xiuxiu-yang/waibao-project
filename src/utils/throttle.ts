const throttle = (fn: () => void, delay: number) => {
  let lastTime = 0
  return (...args: []) => {
    const nowTime = new Date().getTime()
    if (nowTime - lastTime >= delay) {
      lastTime = nowTime
      fn.apply(this, args)
    }
  }
}

export default throttle
