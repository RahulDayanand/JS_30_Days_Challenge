//Activity 2 - Function Expression

//Task 3

const maxNumber = function(num1, num2){
    let max = (num1 > num2) ? num1 : num2;
    console.log(max);
}

maxNumber(8,9);

//Task 4

const conCat = function(str1, str2){
    return str1 + " " + str2;
}

console.log(conCat("Hello", "World"));
