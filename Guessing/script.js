let input = document.getElementById( "input" );
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById( "guesses");

let answer = Math.floor(Math.random()*100)+1; // Generate a random number between 1 and 100 (inclusive)
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", () =>{
    guessesNumber();
})

function guessesNumber() {
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrng.innerHTML = "Enter Between 1 to 100";
    } else {
        numGuesses++ ;
        guesses.innerHTML = "No of Guess: " +numGuesses;

        if(input.value < answer){
            wrng.innerHTML = "You Guessed too Low";
            input.value = "";
        } else if(input.value > answer){
            wrng.innerHTML = "You Guessed too High";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations You Guessed it Correct";
            
            setTimeout(() => {
                resetGame();
            },5000)
        }
    }
}

function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    guesses.innerHTML = "No. of Guess: 0"
}