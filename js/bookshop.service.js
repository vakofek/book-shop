'use strict'

var BOOKS_KEY='store books';
var gBooks;


_createBooks();
function _createBooks() {
    var books = loadFromStorage(BOOKS_KEY);
    if (!books || !books.length) {
        books = [];
        books.push(_createBook('Departing', 99));
        books.push(_createBook('Divergent', 115));
        books.push(_createBook('Supernova', 39));
        books.push(_createBook('Survived', 50));
        books.push(_createBook('The-walk', 79));
        books.push(_createBook('Departing', 99));
        // books.push(_createBook('Divergent', 115));
        // books.push(_createBook('Supernova', 39));
        // books.push(_createBook('Survived', 50));
        // books.push(_createBook('The-walk', 79));
    }
    gBooks = books;
    console.log(gBooks);
    saveBooksToStorage(BOOKS_KEY,gBooks);
}

function _createBook(name, price) {
    return {
        name,
        price,
        id: makeId(),
        summary:{
            en: makeLoremEn(30),
            he:makeLoremHe(30),
            ar: makeLoremAr(30)
        },
        imgUrl: makeImgUrl(name)
    };
}

function getBooks() {
    return gBooks;
}

function getBookById(bookId) {
    return gBooks.find(function (book) {
        return book.id === bookId;
    });
}

function saveBooksToStorage(key,books) {
    saveToStorage(key, books);
}