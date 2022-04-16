const throttle = (fn: () => void, delay: number) => {
  let lastTime = 0
  return () => {
    const nowTime = new Date().getTime()
    if (nowTime - lastTime >= delay) {
      lastTime = nowTime
      fn()
    }
  }
}

export default throttle
