const setTimeoutPromisified = function (duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

function callback() {
  console.log("5 seconds have passed.");
}

// setTimeoutPromisified(5000).then(callback);

// callback hell
setTimeout(() => {
  console.log("Wassup");
  setTimeout(() => {
    console.log("ma");
    setTimeout(() => {
      console.log("Nigga");
    }, 5000);
  }, 3000);
}, 1000);

// Promise chaining
setTimeoutPromisified(1000).then(() => {
  console.log("Wassup");
  return setTimeoutPromisified(3000);
}).then(() => {
    console.log("ma");
    return setTimeoutPromisified(5000);
}).then(() => console.log("Nigga"));


// using async & await
async function hoodGreeting() {
    await setTimeoutPromisified(1000);
    console.log("Wassup");
    await setTimeoutPromisified(3000);
    console.log("ma");
    await setTimeoutPromisified(5000);
    console.log("Nigga");
}

hoodGreeting()