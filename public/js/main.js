
//http://www.net-comber.com/charset.html
const log = console.log
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');



generateEl.addEventListener('click', () => {
    // const length = parseInt(lengthEl.value);
    const length = +lengthEl.value;
    log(typeof length)
})

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}
const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];

}
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

log(randomFunc.lower())
/*const app = () => {

    getRandomSymbol();
    getRandomUpper();
    getRandomLower();
    getRandomNumber();
}
app()*/

