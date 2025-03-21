/* ******************************************** */
/*                  PALINDROMA                  */
/* ******************************************** */
// inizio funzione checkPalindrome
// definisco la funzione per capire se la parola è palindroma
function checkPalindrome(word){
  // creo un array vuoto per la parola inserita dall'utente
  const wordArray = [];
  // ciclo word per ogni lettera inserita
  for(i=0; i<word.length; i++){
    //inserisco ogni lettera di word dentro wordArray
    wordArray.push(word[i]);
  }
  // stampa di controllo per wordArray
  console.log("Parola inserita:", wordArray);

  // creo un nuovo array contenente le lettere della parola inserite in ordine contrario
  const wordReversedArray = wordArray.toReversed();
  // stampa di controllo per wordReversedArray
  console.log("Il contrario di", word, "è", wordReversedArray);

  // creo una variabile di controllo
  let isPalindrome = false;
  // controllo se la parola è uguale al suo contrario e stampo il risultato
  if(wordArray.toString() == wordReversedArray.toString() && isPalindrome == false){
    isPalindrome = true;
    console.log("La parola", word, "è palindroma.");
  }
  if(wordArray != wordReversedArray && isPalindrome == false){
    console.log("La parola", word, "non è palindroma");
  }
} 
// fine funzione

console.log("###### PALINDROMA ######");
// definisco la variabile userWord e le assegno un valore immesso dall'utente
let userWord = prompt("Inserisci la parola da controllare.");

// chiamo la funzione checkPalindrome per userWord
checkPalindrome(userWord);



/* ******************************************** */
/*                PARI E DISPARI                */
/* ******************************************** */
console.log("###### PARI E DISPARI ######")
// definisco la funzione genNum per generare un numero random in un intervallo
function genNum(min, max){
  let pcNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("Il computer ha fatto:", pcNum);

  return pcNum;
}

// definisco la funzione evenVsOdd per stabilire se la somma dei numeri dell'utente e del computer sono pari o dispari
function evenVsOdd(numA, numB){
  // variabile di controllo
  let isEven = false;
  // variabile per la somma
  let sum = numA + numB;
  console.log("Il totale è:", sum);
  if(sum % 2 == 0 && isEven == false){
    isEven = true;
    console.log("E' un numero pari");
  }
  if(sum % 2 != 0){
    console.log("E' un numero dispari");
  }

  return isEven;
}

// chiedo all'utente di scegliere pari o dispari
let userChoice = prompt("Scegli pari o dispari").toLowerCase();
if(userChoice !== "pari" && userChoice !== "dispari"){
  userChoice = prompt("Valore non valido. Inserisci pari o dispari").toLowerCase();
  console.log("Hai scelto:", userChoice);
}
else{
  console.log("Hai scelto:", userChoice);
}

// chiedo all'utente un numero da 1 a 5 e assegno il risultato a una variabile
let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
if(userNum < 1 || userNum > 5){
userNum = parseInt(prompt("Numero non valido. Inserisci un numero da 1 a 5")) 
console.log("Hai fatto:", userNum);
}
else{
  console.log("Hai fatto:", userNum);
}
// chiamo la funzione genNum per i numeri da 1 a 5 e assegno il risultato a una variabile
let pcNum = genNum(1,5);
// chiamo la funzione evenVsOdd per stabilire se la somma dei numeri è pari o dispari
let result = evenVsOdd(userNum, pcNum);
// dichiaro chi ha vinto
if(result == true && userChoice === "pari"){
  console.log("Hai Vinto!");
}
else if(result == true && userChoice === "dispari"){
  console.log("Hai Perso!");
}
else if(result == false && userChoice === "dispari"){
  console.log("Hai Vinto!");
}
else if(result == false && userChoice === "pari"){
  console.log("Hai Perso!");
}




