
//http://www.net-comber.com/charset.html
const log = console.log
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


//gen event listen
generateEl.addEventListener('click', () => {
    // const length = parseInt(lengthEl.value);
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;
 
    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol,
        length
    );
});

//copy pw to clipboard
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('pw copied to clipboard')
})

//gen password function
const generatePassword = (lower, upper, number, symbol, length) => {
 
   let generatedPassword = '';
   
   const typesCount = lower + upper + number + symbol;
   

   const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

   
   if(typesCount === 0) {
       return  resultEl.innerText = 'pick something';
   }
   for(let i = 0; i < length; i += typesCount) {
       typesArr.forEach(type => {
           const funcName = Object.keys(type)[0];
           generatedPassword += randomFunc[funcName]();
       })
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

}

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


/*const app = () => {

    getRandomSymbol();
    getRandomUpper();
    getRandomLower();
    getRandomNumber();
}
app()*/

