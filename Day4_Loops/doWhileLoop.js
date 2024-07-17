//Activity 3 - Do While Loop

//Task 5

let i=1;
do{
  console.log(i);
  i++;
}while(i <= 5);

//Task 6

let n = 5;
let fact1 = 0;
let fact2 = 1;
let fact3 = fact1 + fact2;
i = n;
do{
   fact3 *= i;
   i--;       
}while(i > 0);

console.log(fact3);