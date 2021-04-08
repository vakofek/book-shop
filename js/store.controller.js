'use strict'


function onStoreInit() {
    console.log('store init');
    renderBookStore();
}

function renderBookStore() {
    // debugger;
    var books = getBooks();
    var strHTML = books.map(function (book) {
        return ` 
<div class="card" style="width: 18rem;">
<img src="${book.imgUrl}" class="card-img-top">
<div class="card-body">
  <h5 class="card-title">${book.name}</h5>
  <p class="card-text">${book.summary}</p>
  <span>Price : ${book.price}</span>
  <a class="btn btn-primary"  onclick="onAddToCart('${book.id}')">Add to cart</a>
  <a href="./store.cart.html" class="btn btn-primary" onclick="onBuy('${book.id}')">Buy</a>
</div>
</div>
`
    });

    var elBooksCards = document.querySelector('.books-cards-area');
    elBooksCards.innerHTML = strHTML.join('');
}

function onAddToCart(bookId) {
   addToCart(bookId);
    
}

function onBuy(bookId) {
    addToCart(bookId);
    console.log('Move to cart win');
}