//Activity 3 - Array Methods Intermediate

let arrays = [1,2,3,4,5];

//Task 7

let result = arrays.map(array => array * 2);
console.log("Mapped Array : " ,result);
console.log("Original Array : " ,arrays);

//Task 8

let result1 = arrays.filter(array => array % 2 === 0);
console.log("Filtered Array : " ,result1);
console.log("Original Array : " ,arrays);

//Task 9

let result2 = arrays.reduce((acc, cur) => acc + cur);
console.log("Reduced Array : " ,result2);
console.log("Original Array : " ,arrays);