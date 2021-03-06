var currentScore, playerOneScore, playerTwoScore, dice, activePlayer, playerOneName, playerTwoName, scoreToWin;

// DOM
var diceDOM = document.querySelector('.dice');

var currentScoreDOM = document.getElementById('current-score');
var currentScoreTextDOM = document.querySelector('.current-score-text');

var playerOneScoreDOM = document.getElementById('player-1-score');
var playerTwoScoreDOM = document.getElementById('player-2-score');

var playerOneBoxDOM = document.getElementById('player-1-box');
var playerTwoBoxDOM = document.getElementById('player-2-box');

var activePlayerOneTextDOM = document.querySelector('.active-player-1-text');
var activePlayerTwoTextDOM = document.querySelector('.active-player-2-text');

var rollButtonDOM = document.getElementById('btn-roll');
var passButtonDOM = document.getElementById('btn-pass');

// set everything to the starting point
settings();
reset();

// NEW GAME button logic
document.getElementById('btn-new').addEventListener('click', function() {
    settings();
    reset();
});


// ROLL button logic
rollButtonDOM.addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;

    if(dice != 1) {
        currentScore += dice;
        diceDOM.style.transform = 'scale(1.0)';
        
    } else {
        currentScore = 0;
        changeActivePlayer();
        diceDOM.style.transform = 'scale(1.1)';
    }

    diceDOM.src = 'img/dice-' + dice + '.png';

    currentScoreDOM.textContent = currentScore + '';
    
});

// PASS button logic
passButtonDOM.addEventListener('click', function() {
    currentScoreDOM.textContent = '0';

    if(activePlayer === 1) {
        playerOneScore += currentScore;
        playerOneScoreDOM.textContent = playerOneScore + '';
    } else {
        playerTwoScore += currentScore;
        playerTwoScoreDOM.textContent = playerTwoScore + '';
    }   

    if(playerOneScore >= scoreToWin) {
        winner('one');
    } 
    
    if(playerTwoScore >= scoreToWin) {
        winner('two');
    }

    changeActivePlayer();

    currentScore = 0;
});


// set the game to the starting point
function reset() {

    if(activePlayer === 2) {
        playerOneBoxDOM.classList.add('active');
        playerTwoBoxDOM.classList.remove('active');
    }

    activePlayerOneTextDOM.style.display = 'inline-block';
    activePlayerTwoTextDOM.style.display = 'inline-block';

    activePlayerOneTextDOM.textContent = 'ACTIVE';
    activePlayerTwoTextDOM.textContent = 'INACTIVE';

    diceDOM.style.display = 'inline-block';
    diceDOM.src = 'img/dice-1.png';

    rollButtonDOM.style.display = 'inline-block';
    passButtonDOM.style.display = 'inline-block';
    currentScoreTextDOM.style.display = 'inline-block';


    playerOneBoxDOM.classList.remove('winner');
    playerTwoBoxDOM.classList.remove('winner');
    playerOneBoxDOM.style.display = 'inline-block';
    playerTwoBoxDOM.style.display = 'inline-block';

    currentScore = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    dice = 1;
    activePlayer = 1;
    currentScoreDOM.textContent = '0';
    playerOneScoreDOM.textContent = '0';
    playerTwoScoreDOM.textContent = '0';
}

// change active player
function changeActivePlayer() {
    if(activePlayer == 1) {
        activePlayer = 2;

        activePlayerOneTextDOM.textContent = 'INACTIVE';
        activePlayerTwoTextDOM.textContent = 'ACTIVE';
    } else {
        activePlayer = 1;
        
        activePlayerOneTextDOM.textContent = 'ACTIVE';
        activePlayerTwoTextDOM.textContent = 'INACTIVE';
    }

    playerOneBoxDOM.classList.toggle('active');
    playerTwoBoxDOM.classList.toggle('active');
}

// end game if someone has enough points
function winner(winner) {
    rollButtonDOM.style.display = 'none';
    passButtonDOM.style.display = 'none';
    currentScoreTextDOM.style.display = 'none';
    currentScoreDOM.textContent = 'THE WINNER IS';

    diceDOM.style.display = 'none';

    if(winner === 'one') {
        playerOneBoxDOM.classList.add('winner');
        playerTwoBoxDOM.style.display = 'none';
        activePlayerOneTextDOM.style.display = 'none';

    } else {
        playerTwoBoxDOM.classList.add('winner');
        playerOneBoxDOM.style.display = 'none';
        activePlayerTwoTextDOM.style.display = 'none';
    } 
}
