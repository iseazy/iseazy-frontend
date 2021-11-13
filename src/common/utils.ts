export function getCurrentDate(): number {
    return new Date().getTime();
}

export function getFormattedTimeDifference(fromDate: number, toDate: number = getCurrentDate()): string {
    const millis = toDate -fromDate;
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    let gameDuration = '';

    if (minutes > 0) {
        gameDuration += `${minutes}min`;
    }

    return `${gameDuration} ${seconds}s`;
}

export function shuffleList<T>(items: Array<T>): Array<T> {
    return items.sort(() => Math.random() - 0.5);
}
