//Activity 1 - If Else Statements

//Task1

let n = 5;
if(n > 0){
   console.log("Positive"); 
} else if (n < 0){
    console.log("Negative");
} else {
    console.log("Zero");
}

//Task 2

let age = 18;

if(age >= 18){
    console.log("Eligible To Vote");
} else {
    console.log("Not Eligible To Vote");
}

//Activity 2 - Nested If-Else Statements 

//Task 3

let a = 10;
let b = 5;
let c = 15;
let largest = 0;

if(a > b){
  if(a > c){
    largest = a;
  } else {
    largest = c;
  }
} else {
    if(b > c){
        largest = b;
    } else {
        largest = c;
    }
}

console.log(largest);