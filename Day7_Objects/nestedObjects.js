//Activity 3 - Nested Objects

//Task 5

let library = {
    name: "C K Library",
    books: [
    {     
        title: "Some Book",
        author: "Someone",
        year: 2021,
    },
    {
        title: "Some Book1",
        author: "Someone1",
        year: 2022,
    },
    {
        title: "Some Book2",
        author: "Someone2",
        year: 2023,
    }]
}

console.log(library);

//Task 6

console.log(library.name);

library.books.forEach(book => console.log("Book Title : " ,book.title));