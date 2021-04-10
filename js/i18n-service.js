'use strict'
var LANG_KEY = 'Language'

var gTrans = {
    'nav-store': {
        en: 'Store',
        he: 'חנות',
        ar: 'دكان'
    },
    'nav-cart': {
        en: 'Cart',
        he: 'עגלה',
        ar: 'عَرَبَة نَقْل'
    },
    'nav-manage': {
        en: 'Manager-loggin',
        he: 'ניהול',
        ar: 'أدار'
    },
    'nav-search': {
        en: 'Search',
        he: 'חיפוש',
        ar: 'بحث'
    },
    'book-price': {
        en: 'Price ',
        he: 'מחיר ',
        ar: 'ثمن'
    },
    'btn-add-to-cart': {
        en: 'Add to cart',
        he: 'הוסף לעגלה',
        ar: 'إضافة إلى السلة'
    },
    'btn-buy': {
        en: 'Buy',
        he: 'קנה',
        ar: 'ابتاع'
    },
    'cart-table-book-name': {
        en: 'Book name',
        he: 'שם הספר',
        ar: 'اسم الكتاب'
    },
    'cart-table-book-price': {
        en: 'Price',
        he: 'מחיר',
        ar: 'ثمن'
    },
    'cart-table-qty': {
        en: 'Qty',
        he: 'כמות',
        ar: 'مبلغ'
    },
    'cart-table-total-price': {
        en: 'Total price',
        he: 'מחיר סה"כ',
        ar: 'السعر الإجمالي'
    },
    'cart-table-remove': {
        en: 'Remove from cart',
        he: 'הסר מהעגלה',
        ar: 'إزالة من عربة'
    }

}

var gCurrLang = loadFromStorage(LANG_KEY);

function getTrans(transKey) {
    gCurrLang = loadFromStorage(LANG_KEY);
    if (!gCurrLang) gCurrLang = 'en';
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';
    var txt = keyTrans[gCurrLang];
    if (!txt) txt = keyTrans['en'];
    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
    saveToStorage(LANG_KEY, gCurrLang);
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');

    els.forEach(function (el) {
        var transKey = el.dataset.trans;
        var txt = getTrans(transKey);
        if (el.nodeName === 'INPUT') el.setAttribute('placeholder', txt);
        else el.innerText = txt;
    });

}

function doTransSummary(books) {
    var els = document.querySelectorAll('.book-summary');
    books.forEach(function (book, idx) {
        els[idx].innerText = book.summary[gCurrLang];
    });
}

function formatCurrency(price) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(price);
}

function getCurrLang() {
    var currLang = loadFromStorage(LANG_KEY);
    if (!currLang) return 'en';
    else return currLang;
}

function doTranceNavBar(){

}