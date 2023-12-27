// Declare Variables
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1) ;

const guess =document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event listeners
submit.addEventListener("click", checkGuess);

function checkGuess() {
const userValue = Number(guess.value);
attempts++;

if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
 } else if (userValue < randomNum) {
    hint.textContent = "Too low! Try Again";
   }  else {
        hint.textContent = "Too high! Try Again";
    

}
attemptsText.textContent =
"Attempts: " + attempts;
}



