//* Snack 1 - Somma

//dichiarativa
function somma(a, b) {
  return a + b;
}
console.log("La somma di 1 + 2 è", somma(1, 2)); //output: 3

//funzione anonima assegnata ad una variabile
const varSum = (a, b) => {
  return a + b;
};
console.log("La somma di 3 + 4 è", varSum(3, 4)); //output: 7

//arrow function
const arrowSum = (a, b) => a + b;
console.log(`La somma di 5 + 6 è`, arrowSum(5, 6)); //output:11

//*Snack 2 - Quadrato
const quadrato = (a) => a * a;
console.log("Il quadrato di 3 è", quadrato(3));

//*Snack 3 - eseguiOperazione
const dividi = (a, b) => a / b;
const sottrai = (a, b) => a - b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(20, 2, dividi)); //output: 10
console.log(eseguiOperazione(4, 1, sottrai)); //output: 3

//*Snack 4 - CreaTimer
/* make HoF, ms as parameter   commented out to test Snack 8
function creaTimer(ms) {
  return function () {
    //set the timeout action
    setTimeout(() => {
      console.log("Tempo scaduto");
    }, ms);
  };
}
//call on the function
const timer = creaTimer(5000);
//execute function
timer();
*/

/*#region Snack 5 
//* stampaOgniSecondo con setInterval

function stampaOgniSecondo(ms) {
  return function () {
    setInterval(() => {
      console.log("Stampo in Loop");
    }, ms);
  };
}

const print = stampaOgniSecondo(1000);
// print(); commented out to avoid infinite loop

//* Versione con clearInterval
function stampaOgniSecondoStop(ms) {
  return function () {
    const intervalId = setInterval(() => {
      //identify intervailId
      console.log("Stampo in Loop - 5 sec stop");
    }, ms);
    return intervalId; //return the id
  };
}

const printStop = stampaOgniSecondoStop(1000);
//associate intervalId with executing printStop function
// const intervalId = printStop(); commented out to test Snack 7

//stop loop with clearInterval
setTimeout(() => {
//   clearInterval(intervalId); commented out to avoid errors in console while testing Snack7
  console.log("Loop fermato dopo 5 secondi");
}, 5000);
#endregion Snack 5 */

// Snack 7 - eseguiEferma

function eseguiEFerma(msg, interval, stop) {
  const intervalId = setInterval(() => {
    console.log(msg);
  }, interval);
  setTimeout(() => {
    clearInterval(intervalId);
    console.log(`Stop al Tempo dopo ${stop} millisecondi`);
  }, stop);
}

// eseguiEFerma("Hello Pills!", 1000, 5000); commented out to test Snack 8

//* Snack 8- BONUS - conto alla rovescia

function contoAllaRovescia(start) {
  let number = start;
  const intervailId = setInterval(() => {
    console.log(number);
    number--;
    if (number < 0) {
      clearInterval(intervailId);
      console.log("Tempo scaduto!");
    }
  }, 1000);
}
//execute counter
contoAllaRovescia(5);

//* Snack 9 - BONUS - sequenzaOperazioni
function sequenzaOperazioni(operazioni, interval) {
  let index = 0;
  function nextOperation() {
    if (index < operazioni.length) {
      operazioni[i]();
      index++;
      setTimeout(nextOperation, interval);
    }
  }
  nextOperation();
}

const operazioni = [
  () => console.log("operazione 1"),
  () => console.log("operazione 2"),
  () => console.log("operazione 3"),
];

sequenzaOperazioni(operazioni, 1000);
