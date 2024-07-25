//Activity 3 - Spread And Rest Operators

//Task 5 - Spread Operator

let array = [3, 4, 5];
let newArray = [1, 2, ...array];
console.log(newArray);

//Task 6 - Rest Operator

let sum = (...args) => {
    return args.reduce((acc, cur) => acc + cur);
}

console.log(sum(1, 2, 3, 4, 5));