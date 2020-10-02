// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './check-results.js';

const button = document.querySelector('#submit-button');
const resultsSpan = document.querySelector('#results');
const winsSpan = document.querySelector('#wins');
const lossesSpan = document.querySelector('#losses');
const drawsSpan = document.querySelector('#draws');
const percentSpan = document.querySelector('#percent');
const resetButton = document.querySelector('#reset-button');


let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;


// set event listeners to update state and DOM

button.addEventListener('click', () => {
    
    const checkedButton = document.querySelector(':checked');
    const userInput = checkedButton.value;
    const computerInput = getRandomThrow();
    const result = checkResults(userInput, computerInput);
    if (result === 'win') {
        wins++;
        resultsSpan.textContent = 'You won!';
    } else if (result === 'lose') {
        losses++;
        resultsSpan.textContent = 'You lose!';

    } else {
        draws++;
        resultsSpan.textContent = 'Its a draw!';

    }

    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;

    total++;
    percentSpan.textContent = `${((wins / total) * 100).toFixed(1)}%`;

});

resetButton.addEventListener("click", () => {
    wins = 0;
    losses = 0;
    draws = 0;
    total = 0;
    percentSpan.textContent = "";
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;

});

// document.getElementById("reset").onclick = function() {
//     document.getElementById("outcomes").value = "";
// }