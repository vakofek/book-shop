'use strict'


function onStoreInit() {
    doTrans();
    renderBookStore();
}

function renderBookStore() {
    // debugger;
    var books = getBooks();
    var currLang = getCurrLang()
    var strHTML = books.map(function (book) {
        var bookPrice = formatCurrency(book.price);
        return ` 
<div class="card" style="width: 18rem;">
<img src="${book.imgUrl}" class="card-img-top">
<div class="card-body">
  <h5 class="card-title">${book.name}</h5>
  <p class="book-summary card-text">${book.summary[currLang]}</p>
  <span>${bookPrice}</span>
  <a class="btn btn-primary" data-trans="btn-add-to-cart"  onclick="onAddToCart('${book.id}')">${gTrans['btn-add-to-cart'][currLang]}</a>
  <a href="./store.cart.html" class="btn btn-primary" data-trans="btn-buy" onclick="onBuy('${book.id}')">${gTrans['btn-buy'][currLang]}</a>
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

function onSetLang(lang) {
    setLang(lang);
    doTrans();
    renderBooksSummary()
}



function renderBooksSummary() {
    var books = getBooks();
    doTransSummary(books);
}

function renderNavBar() {
    doTranceNavBar();
}
