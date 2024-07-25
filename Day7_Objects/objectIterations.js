//Activity 5 - Object Iterations

let book = {
    title: "Some Book",
    author: "Someone",
    year: 2021,

    //this keyword doesn't work for arrow functions
    
    getTitleAndYear: function() {
        return "Book Title " + this.title + " was published on " + this.year;
    }
}

//Task 8

for(const index in book){
  console.log(index + " : " + book[index]);  //index = key, book[index] = value
}

//Task 9 

let keys = Object.keys(book);
console.log(keys); //Returns an array of property names

let values = Object.values(book);
console.log(values); //Returns an array of property values