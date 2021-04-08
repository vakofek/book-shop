'use strict'

var CART_KEY = 'cart books';
var gCart = loadFromStorage(CART_KEY);

_createBooksCart();
function _createBooksCart() {
    var cartBooks = loadFromStorage(BOOKS_KEY);
    if (!gCart || !gCart.length) {
        if (!gCart) {
            cartBooks = cartBooks.map(function (book) {
                return {
                    bookDetail: book,
                    addCount: 0
                };
            });
        }
        gCart = cartBooks;
        saveBooksToStorage(CART_KEY, gCart)
    }
}


function addToCart(bookId) {
    var currBook = gCart.find(function (book) {
        return (book.bookDetail.id === bookId);
    });
    currBook.addCount++;
    console.log('gCart', gCart);
    saveBooksToStorage(CART_KEY, gCart)

}

function getCartBooks() {
    gCart = loadFromStorage(CART_KEY);
    return gCart;
}

function updateAddCount(bookId, updateCount) {
    var currBook = _getBookbuId(bookId);
    currBook.addCount = updateCount
    saveBooksToStorage(CART_KEY, gCart)
}


function removeFromCart(bookId) {
    var currBookIdx = _getIndexOfBook(bookId);
    gCart[currBookIdx].addCount = 0;
    saveBooksToStorage(CART_KEY, gCart)
}

function _getBookbuId(bookId) {
    return gCart.find(function (book) {
        return book.bookDetail.id === bookId;
    });
}

function _getIndexOfBook(bookId) {
    return gCart.findIndex(function (book) {
        return book.bookDetail.id === bookId;
    });
}

function getTotalPrice() {
    var price = 0;
    gCart.forEach(function (book) {
        // debugger
        price += (book.addCount * book.bookDetail.price);
    });
    return price;
}