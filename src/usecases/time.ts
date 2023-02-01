export type FormatedTime = `${string}:${string}`

export function formatTimeFromMilliseconds(milliseconds: number): FormatedTime {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const secondsLeft = seconds % 60

  const secondsString = `${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
  const minutesString = `${minutes < 10 ? '0' : ''}${minutes}`

  return `${minutesString}:${secondsString}`
}
