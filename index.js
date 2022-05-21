const a = 9;
const b = 10;

const sum = a + b;
console.log(sum);

// These are two ways in which you can use call backs

// synchronous way
// asynchronous way

// by default we have node.js

setTimeout(() => {
    console.log("Hello there")
}, 1000)

const arr = [1, 2, 3, 4];
arr.forEach((ele) => console.log(ele))

