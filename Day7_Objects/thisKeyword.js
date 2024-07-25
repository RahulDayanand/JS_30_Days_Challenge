//Activity 4 - this keyword

//Task 7

let book = {
    title: "Some Book",
    author: "Someone",
    year: 2021,

    //this keyword doesn't work for arrow functions
    
    getTitleAndYear: function() {
        return "Book Title " + this.title + " was published on " + this.year;
    }
}

console.log(book.getTitleAndYear());