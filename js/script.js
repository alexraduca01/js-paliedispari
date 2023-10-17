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

function palindrome() {
    
    const domanda = document.getElementById('testo').value;

    for(let a = 0; a < domanda.length; a++){
        
        if(domanda[a] !== domanda[domanda.length - 1 - a]){
            result.innerHTML = domanda + ' ' + 'non è una palindroma !!';
            return false;
        }
        
    }

    result.innerHTML = domanda + ' ' + 'è una palindroma !!';
    return true;
}

const btn = document.querySelector('button');
const wrapper = document.getElementById('wrapper');
let result = document.createElement('div');
wrapper.append(result);

btn.addEventListener('click', palindrome);