//Activity 5 - Enhanced Object Literals

//Task 8

let name = "Rahul";
let age = 24;

let object = {
  //name: name,
  //age: age,

  name,  //Property ShortHand
  age,   //Property ShortHand

  method(){  //Method ShortHand
    return `Hello I'm ${this.name} and my age is ${this.age}`;
  }
}

console.log(object);
console.log(object.method());

//Task 9

let key = 'name';

let object1 = {
    [key]: 'Rahul' //Computed property name
}

console.log(object1);