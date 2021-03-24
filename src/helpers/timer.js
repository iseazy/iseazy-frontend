let intervalName, time;
export function interval() {
    time = 1;
    intervalName = setInterval(function () {
        document.getElementById("timer").innerHTML = time++ + 's';
    }, 1000, "JavaScript");
}
export function clear() {
    clearInterval(intervalName);
}