# lab-03-rock-paper-scissors

Goal: Let user choose rock, paper, or scissors. Track their wins and losses as percent.

State:
- wins
- total
- (losses derived from state)
- Current user selection from radio button

How do we show this state?
- display in divs' textContent

HTML elements to grab:
- State Changers
    - Rock, paper, scissors (radio buttons) > to collect user input
    - Submit button > to confirm user input
- State Viewers
    - Win Span > show wins
    - Loss Span > show losses
    - Percent Span > show the percent of wins

How/When does state change?
- When user selects R-P-S and clicks the 'submit' button
    - Upon click:
        - generate a random input from 'computer'
        - get the user's input
        - determine if user wins
            - if user wins, increment wins AND percent
            - if user loses, increment percent