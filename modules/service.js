
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

// export default add ---- ES6 import export in react

module.exports = {
    add: add,
    subtract: subtract
}

module.exports = [
    add,
    subtract
]

// module.exports = add; // default export only one defualt export can be there
// console.log(module);

// module.exports = subtract;
// console.log(module);