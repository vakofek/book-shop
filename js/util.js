'use strict'

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeLoremEn(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}
function makeLoremHe(size = 100) {
    var words = [ 'כשהוא יגיע'  ,'ואין לנו' ,'ספק','שהוא' ,'יגיע'  ,'נוכל' ,'להתחיל' ,'לחיות' ,'את' ,'חיינו' ,'באמת' ,'רק אז נוכל לעבוד' ,'בתחום' ,'מעניין' ,'באמת.' ,'נוכל' ,'לבלות' ,'עם מי שאנחנו אוהבים.' ,'למצוא' ,'זמן' ,'גם' ,'לעצמנו' ,'זה הרי יקרה.' ,'מתישהו.' ,'אבל' ,'לא' ,'היום' ,'אלא בעתיד' ];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}
function makeLoremAr(size = 100) {
    var words = ['محيط غزة','. السجناء الأمنيون الذين' ,'تعرضوا' ,'للسادية القاتلة' ,'لزعيم حماس' ,'يحيى' ,'سنوار' ,'الرجل' ,'الذي كان مراهقاً،' ,'توجه' ,'نحو نقطة' ,'تفتيش' ,'إسرائيلية مرتدياً حزاماً' ,'ناسفاً' ,'وأوقف في' ,'اللحظة الأخيرة','.' ,'هذه' ,'ليست سوى بعض' ];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function makeImgUrl(name){
    var updateName=name.toLowerCase();
    return `./img/${updateName}.jpeg`
}
