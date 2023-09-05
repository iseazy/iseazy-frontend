export const getTimeFormatted = (time: number): string => {

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesFormatted}:${secondsFormatted}`;
}