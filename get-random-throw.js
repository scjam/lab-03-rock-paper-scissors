export function getRandomThrow() {

    const randomNumber = Math.ceil(Math.random() * 3);

    let randomThrow;

    if (randomNumber === 1) {
        randomThrow = 'rock';
    } else if (randomNumber === 2) {
        randomThrow = 'scissors';
    } else {
        randomThrow = 'paper';
    }

    return randomThrow;
}

//export function checkResult(player,computer) => 