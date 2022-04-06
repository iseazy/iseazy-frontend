export const timeFormat = (date) => {
    if (!date) return "00:00";

    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();

    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    return `${mm}:${ss}`;
};