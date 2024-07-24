//Activity 3 - Arrow Functions

//Task 5

const sum = (num1, num2) =>  {
   return num1 + num2;
}    
console.log(sum(3,5));

//Task 6

const string = (str, char) => {
    for(let i=0; i<str.length; i++){
        if(str[i] === char){
            return true;
        } else {
            return false;
        }
    }
}

console.log(string("Hello", 'O'));