/* ******************************************** */
/*                  PALINDROMA                  */
/* ******************************************** */
// definisco la funzione per capire se la parola è palindroma
function checkPalindrome(word){
  // creo un array vuoto per la parola inserita dall'utente (word)
  const wordArray = [];
  // ciclo word per ogni lettera inserita
  for(i=0; i<word.length; i++){
    //inserisco ogni lettera di word dentro wordArray
    wordArray.push(word[i]);
    // stampa di controllo per ogni lettera
    console.log(word[i]);
  }
  // stampa di controllo per wordArray
  console.log("Parola inserita:", wordArray);

  // creo un nuovo array contenente le lettere della parola inserite in ordine contrario
  const wordReversedArray = wordArray.toReversed();
  // stampa di controllo per wordReversedArray
  console.log("Il contrario di", word, "è", wordReversedArray);
}

// definisco la variabile userWord e le assegno un valore immesso dall'utente
let userWord = prompt("Inserisci la parola da controllare.");
// stampa di controllo per userWord
console.log(userWord);

// chiamo la funzione checkPalindrome per userWord
checkPalindrome(userWord);

