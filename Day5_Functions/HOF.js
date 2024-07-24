//Activity 5 - Higher Order Functions

//Task 9

function func(){
  console.log("Hello");
}

const hof1 = (func, num) => {
    for(let i=0; i<num ;i++){
      func();
    }
}
hof1(func, 5);

//Task 10

const funct1 = (num) => num + num;

const funct2 = (num) => num * num;

const hof2 = (funct1, funct2, num) => {
    const value = funct1(num);
    return funct2(value);
}

console.log(hof2(funct1, funct2, 5));