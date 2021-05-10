const getTimeInterval = (startTime, endTime) => {
    const interval = (endTime - startTime) / 1000;
    const minutes = Math.floor(interval / 60)
    const seconds = Math.floor(interval - minutes * 60)

    return [minutes, seconds]
}

export default getTimeInterval