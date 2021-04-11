export const getPlayedTime = startTime => {
  const endTime = new Date().getTime()
  const difference = endTime - startTime
  const seconds = Math.floor(difference / 1000)
  const minutes = Math.floor(seconds / 60)
  const secondsRest = seconds % 60
  const secondsFormatted = secondsRest < 10 ? `0${secondsRest}` : secondsRest

  return `${minutes}:${secondsFormatted}`
}
