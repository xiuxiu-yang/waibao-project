export const getNowTime = () => {
  const time = new Date(+new Date() + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, ' ')
    .replace(/\.[\d]{3}Z/, '')
  return time
}

export const compareTime = (beginTime: any, endTime: any) => {
  const beginTimes = beginTime.substring(0, 10).split('-')
  const endTimes = endTime.substring(0, 10).split('-')

  beginTime = `${beginTimes[1]}-${beginTimes[2]}-${
    beginTimes[0]
  } ${beginTime.substring(10, 19)}`
  endTime = `${endTimes[1]}-${endTimes[2]}-${endTimes[0]} ${endTime.substring(
    10,
    19
  )}`

  const a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000
  if (a < 0) {
    return false
  }
  if (a > 0) {
    return true
  }
  return true
}
