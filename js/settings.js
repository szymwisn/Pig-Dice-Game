var wrapper = document.querySelector('.wrapper');
var settingsBox = document.querySelector('.settings-box');
var oneName = document.getElementById('player-1-name');
var twoName = document.getElementById('player-2-name');
var pointsToWin = document.getElementById('points-to-win');

function settings() {
    wrapper.style.display = 'none';
    settingsBox.style.display = 'block';
    
    document.getElementById('btn-play').addEventListener('click', function() {

        if(validateInputs()) {
            wrapper.style.display = 'block';
            settingsBox.style.display = 'none';
    
            playerOneName = oneName.value;
            playerTwoName = twoName.value;
            scoreToWin = pointsToWin.value;

            document.getElementById('player-one-name').textContent = playerOneName;
            document.getElementById('player-two-name').textContent = playerTwoName;
        }
        
        

    });
}

function validateInputs() {

    if(oneName.value == "" || oneName.value == null || twoName.value == "" || twoName.value == null || pointsToWin.value == '' || pointsToWin.value == null) {
        alert('Fulfill all the inputs');
        return false;
    } else {        
        if(Number.parseInt(pointsToWin.value))
            return true;
        else {
            alert('Points must be a number');
            return false;
        }
    }
        
}