function count() {
    cnt += 1;
    console.clear();
    console.log(cnt);
}

let cnt = 0;
const interval = setInterval(count, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Timer stopped after 10 seconds.");
}, 10500);