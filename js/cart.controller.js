'use strict';



function onCartInit() {
    // debugger
    renderCart();
    doTrans();
    console.log(getCartBooks());
}

function renderCart() {
    // debugger
    var cartBooks = getCartBooks();
    var strHtml = cartBooks.map(function (book) {
        if (book.addCount > 0) {
            return `<tr>
            <th scope="row" class="cart-th-txt">
            <img class="cart-book-pic" src="${book.bookDetail.imgUrl}" />
            ${book.bookDetail.name}</th>
            <td class="cart-td-txt">${book.bookDetail.price}</td>
            <td>
            <button class="btn btn-outline-primary" onclick="onUpdateAddCount('${book.bookDetail.id}',${book.addCount - 1})">-</button>
            <span class="qyt-txt" >${book.addCount}</span>
            <button class="btn btn-outline-primary" onclick="onUpdateAddCount('${book.bookDetail.id}',${book.addCount + 1})">+</button>
            </td>
            <td class="cart-td-txt">${book.bookDetail.price * book.addCount}</td>
            <td ><button class="btn btn-outline-primary" onclick="onRemoveFromCart('${book.bookDetail.id}')">X</button></td>
          </tr>`
        }

    });
    document.querySelector('.cart-body-table').innerHTML = strHtml.join('');
    var sumToPay = totalPrice();
    strHtml = `
    <button onclick="window.location.href='./index.html'" class="cart-dir-btn btn btn-primary btn-lg">Back to store</button>
    <span class=price-span>Total price: ${sumToPay}</span>
    <button class="cart-dir-btn btn btn-primary btn-lg">Pay</button>`;
    document.querySelector('.cart-books-message').innerHTML = strHtml;

}

function onUpdateAddCount(bookId, updateCount) {
    if (updateCount < 0) return;
    updateAddCount(bookId, updateCount);
    renderCart();
}

function onRemoveFromCart(bookId) {
    removeFromCart(bookId);
    renderCart();
}

function totalPrice() {
    return getTotalPrice();
}