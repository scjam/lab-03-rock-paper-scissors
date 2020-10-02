
// initialize state

export function checkResults(player, computer) {

    if (player === 'rock' && computer === 'paper') {
        return 'lose';
        // losses++;

        // resultsSpan.textContent = 'Paper covers rock, you lose!';
        // lossesSpan.textContent = losses;
    
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
        // losses++;

        // resultsSpan.textContent = 'Scissors cuts paper, you lose!';
        // lossesSpan.textContent = losses;
    
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';

        // losses++;

        // resultsSpan.textContent = 'Rock smashes scissors, you lose!';
        // lossesSpan.textContent = losses;
    
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
        // wins++;

        // resultsSpan.textContent = 'Rock smashes scissors, you win!';
        // winsSpan.textContent = wins;
    
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';

        // wins++;

        // resultsSpan.textContent = 'Paper covers rock, you win!';
        // winsSpan.textContent = wins;
    
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';

        // wins++;

        // resultsSpan.textContent = 'Scissors cut paper, you win!';
        // winsSpan.textContent = wins;
    
    } else {
        return 'draw';
        // draws++;

        // resultsSpan.textContent = 'Draw!';
        // drawsSpan.textContent = draws;

    }
}