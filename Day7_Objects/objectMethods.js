//Activity 2 - Object Methods

let book = {
    title: "Some Book",
    author: "Someone",
    year: 2021,

    //Task 3

    getTitleAndAuthor: () => {
        return "Book's Title : " + book.title + " Book's Author : " + book.author;
    },

    //Task 4

    updateYear: (year) => {
     return book.year = year  
    }, 
}

//Task 3

console.log(book.getTitleAndAuthor());

//Task 4

book.updateYear(2016);
console.log(book);