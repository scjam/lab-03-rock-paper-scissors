// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const button = document.querySelector('#submit-button');
const resultsSpan = document.querySelector('#results');
const winsSpan = document.querySelector('#wins');
const lossesSpan = document.querySelector('#losses');
const drawsSpan = document.querySelector('#draws');
const percentSpan = document.querySelector('#percent');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    
    const checkedButton = document.querySelector(':checked');
    const userInput = checkedButton.value;
    const computerInput = getRandomThrow();

    if (userInput === 'rock' && computerInput === 'paper') {
        losses++;
        total++;

        resultsSpan.textContent = 'Paper covers rock, you lose!';
        lossesSpan.textContent = losses;
        percentSpan.textContent = `${(wins / total) * 100}%`;
    
    } else if (userInput === 'paper' && computerInput === 'scissors') {
        losses++;
        total++;

        resultsSpan.textContent = 'Scissors cuts paper, you lose!';
        lossesSpan.textContent = losses;
        percentSpan.textContent = `${(wins / total) * 100}%`;
    
    } else if (userInput === 'scissors' && computerInput === 'rock') {
        losses++;
        total++;

        resultsSpan.textContent = 'Rock smashes scissors, you lose!';
        lossesSpan.textContent = losses;
        percentSpan.textContent = `${(wins / total) * 100}%`;
    
    } else if (userInput === 'rock' && computerInput === 'scissors') {
        wins++;
        total++;

        resultsSpan.textContent = 'Rock smashes scissors, you win!';
        winsSpan.textContent = wins;
        percentSpan.textContent = `${(wins / total) * 100}%`;
    
    } else if (userInput === 'paper' && computerInput === 'rock') {
        wins++;
        total++;

        resultsSpan.textContent = 'Paper covers rock, you win!';
        winsSpan.textContent = wins;
        percentSpan.textContent = `${(wins / total) * 100}%`;
    
    } else if (userInput === 'scissors' && computerInput === 'paper') {
        wins++;
        total++;

        resultsSpan.textContent = 'Scissors cut paper, you win!';
        winsSpan.textContent = wins;
        percentSpan.textContent = `${(wins / total) * 100}%`;
    
    } else {
        draws++;
        total++;

        resultsSpan.textContent = 'Draw!';
        drawsSpan.textContent = draws;
        percentSpan.textContent = `${(wins / total) * 100}%`;

    }
    
});