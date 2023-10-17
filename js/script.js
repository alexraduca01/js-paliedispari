/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione :faccia_nerd:).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione :faccia_nerd:)
Dichiariamo chi ha vinto.
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function palindrome() {

    const domanda = document.getElementById('testo').value;
    let controllo = false;

    for(let a = 0; a < domanda.length; a++){

        if(domanda[a] !== domanda[domanda.length - 1 - a]){
            controllo = true;
        }

    }

    if(controllo){
        result.innerHTML = domanda + ' ' + 'non è una palindroma !!';
    } else {
        result.innerHTML = domanda + ' ' + 'è una palindroma !!';
    }
}

function oddEven() {

    const domanda = parseInt(document.getElementById('testo').value);
    const domanda2 = document.getElementById('odd-even').value;
    let iaNumber = getRandomInteger(1, 5);
    let numbersSum = iaNumber + domanda;

    if(domanda <= 5 && 1 <= domanda){
        if(domanda2 === 'pari'){
        
            if(numbersSum % 2 === 0){
                result.innerHTML = numbersSum + ' ' + 'hai vinto!' + ' ' + "il numero dell'ia è:" + ' ' + iaNumber;
            } else {
                result.innerHTML = numbersSum + ' ' + "l'ia ha vinto" + ' ' + "il numero dell'ia è:" + ' ' + iaNumber;
            }

        } else if(domanda2 === 'dispari'){
            
            if(numbersSum % 2 !== 0){
                result.innerHTML = numbersSum + ' ' + 'hai vinto!' + ' ' + "il numero dell'ia è:" + ' ' + iaNumber;
            } else {
                result.innerHTML = numbersSum + ' ' + "l'ia ha vinto" + ' ' + "il numero dell'ia è:" + ' ' + iaNumber;
            }
        }
    } else {
        result.innerHTML = 'Devi mettere un numero compreso fra 1 e 5 !!!!!!!!!!!!!!!!';
    }
}

const btn = document.querySelector('button');
const wrapper = document.getElementById('wrapper');
let result = document.createElement('div');
wrapper.append(result);

btn.addEventListener('click', palindrome);
// btn.addEventListener('click', oddEven);