//Activity 4 - Function Parameters And Default Values

//Task 7

let product = (prod1, prod2 = 5) => {
    return prod1 * prod2;
}

console.log(product(2));

//Task 8

let person = (personName, age = 24) => {
  return "Hello " + personName + " glad that you're now " + age;
}

console.log(person("Rahul"));