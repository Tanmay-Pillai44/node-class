// const add = require("./service");
// const subtract = require("./service");

const [ add, subtract ] = require("./service");

// const { add, subtract } = require("./service"); // in object destructure name should be same while in array it can be anything

console.log(add(3, 4));
console.log(subtract(3, 4));