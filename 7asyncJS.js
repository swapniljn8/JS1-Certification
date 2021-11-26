//sync programming
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredVal = num.filter((item) => item > 4);
let divtext = document.querySelector('#text');
divtext.innerHTML = filteredVal;
console.log(filteredVal);