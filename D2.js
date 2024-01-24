/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 5
let numero2 = 10
if (numero1 > numero2) {
console.log("il numero1 è il più grande");
}
else if (numero1 < numero2){
  console.log("il numero2 è il più grande");
}
else{
  console.log("i numeri sono uguali")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numer = 8
if (numer !== 5){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let nume= 15
if (nume % 5===0){
  console.log("divisibile per 5")
}
else{
  console.log("non è divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let num1= 16
let num2= 8
if (num1 ===8){
  console.log("il primo numero è uguale 8");
}
else if (num2===8){
  console.logo("il secondo numero è uguale a 8")
}
else{
  console.log("nessuno dei due è uguale a 8")
}
 if (num1+num2===8 || num1-num2===8 || num2-num1===8){
  console.log("la loro somma o sottrazione è uguale a 8")
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totspesa
let totalShoppingCart= 70
const discountbf=20;
if (totalShoppingCart>50){
  totspesa=totalShoppingCart
  console.log("spedizione gratuita")
}
else{
  totspesa=totalShoppingCart+10
  console.log("prezzo con spedizione")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totspesa=totspesa-(totspesa*discountbf/100)
console.log("prezzo finale con sconto"+totspesa)
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let gig = 20;
let giga = 30;
let gigo = 40;
let result = "";

if (gig < giga && giga < gigo) {
  result = "Il loro ordine in modo decrescente sarà " + gigo + ", " + giga + ", " + gig;
} else if (gig > giga && giga > gigo) {
  result = "Il loro ordine in modo decrescente sarà " + gig + ", " + giga + ", " + gigo;
} else if (giga > gig && gig > gigo) {
  result = "Il loro ordine in modo decrescente sarà " + giga + ", " + gig + ", " + gigo;
} else if (giga > gigo && gigo > gig) {
  result = "Il loro ordine in modo decrescente sarà " + giga + ", " + gigo + ", " + gig;
} else if (gig > gigo && gigo > giga) {
  result = "Il loro ordine in modo decrescente sarà " + gig + ", " + gigo + ", " + giga;
} else if (gigo > gig && gig > giga) {
  result = "Il loro ordine in modo decrescente sarà " + gigo + ", " + gig + ", " + giga;
}

console.log(result);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let ele = 15
console.log(typeof ele);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number 
if (number % 2 === 0){
  console.log("il numero inserito è pari")
}
else{
  console.log("il numero inserito è dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
 
  let val = 15
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val >=10) {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  city: 'Toronto',
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
 
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array=[];
 array.push(1,2,3,4,5,6,7,8,9,10);
console.log(array)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9]=100;
console.log(array)
