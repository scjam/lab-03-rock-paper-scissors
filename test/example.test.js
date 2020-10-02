// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
import { checkResults } from '../check-results.js';

const test = QUnit.test;

test('function should return a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'string';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('function should determine if player won', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, 'win');
});

