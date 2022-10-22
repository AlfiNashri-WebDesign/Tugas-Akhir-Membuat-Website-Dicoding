// JavaScript Document
const txtElement = ['Blogger','Developer Rumah', 'Asal Gak Jadi Pengangguran'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tik').textContent = words;  //ubah pada tulisan di index

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 400); // kecepatan tulisan


})();
